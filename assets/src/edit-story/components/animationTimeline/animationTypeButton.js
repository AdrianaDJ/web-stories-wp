/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * External dependencies
 */
import React, { useRef, useState, useCallback } from 'react';
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import Popup from '../popup';
import { AnimationPopover } from './popover';
import { TimelineRowAnimationType, ArrowDownIcon } from './components';

export function AnimationTypeButton({ animation }) {
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <>
      <TimelineRowAnimationType ref={ref} onClick={togglePopover}>
        {animation.animationType}
        <ArrowDownIcon />
      </TimelineRowAnimationType>
      <Popup
        anchor={ref}
        isOpen={isOpen}
        placement="top"
        fillWidth
        zIndex={3}
        renderContents={() => (
          <AnimationPopover togglePopover={togglePopover} />
        )}
      />
    </>
  );
}

AnimationTypeButton.propTypes = {
  animation: PropTypes.object.isRequired,
};
