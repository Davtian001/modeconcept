(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["basket-module-basket-module"],{

/***/ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js":
/*!*********************************************************!*\
  !*** ./node_modules/@angular/cdk/esm5/drag-drop.es5.js ***!
  \*********************************************************/
/*! exports provided: DragDrop, DragRef, DropListRef, CdkDropList, CDK_DROP_LIST, CDK_DROP_LIST_CONTAINER, moveItemInArray, transferArrayItem, copyArrayItem, DragDropModule, DragDropRegistry, CdkDropListGroup, CDK_DRAG_CONFIG_FACTORY, CDK_DRAG_CONFIG, CdkDrag, CdkDragHandle, CdkDragPreview, CdkDragPlaceholder, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDrop", function() { return DragDrop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragRef", function() { return DragRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropListRef", function() { return DropListRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropList", function() { return CdkDropList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST", function() { return CDK_DROP_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DROP_LIST_CONTAINER", function() { return CDK_DROP_LIST_CONTAINER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveItemInArray", function() { return moveItemInArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transferArrayItem", function() { return transferArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copyArrayItem", function() { return copyArrayItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropModule", function() { return DragDropModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropRegistry", function() { return DragDropRegistry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDropListGroup", function() { return CdkDropListGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG_FACTORY", function() { return CDK_DRAG_CONFIG_FACTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CDK_DRAG_CONFIG", function() { return CDK_DRAG_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDrag", function() { return CdkDrag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragHandle", function() { return CdkDragHandle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPreview", function() { return CdkDragPreview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CdkDragPlaceholder", function() { return CdkDragPlaceholder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return CDK_DRAG_PARENT; });
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/coercion */ "./node_modules/@angular/cdk/esm5/coercion.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */









/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Shallow-extends a stylesheet object with another stylesheet object.
 * \@docs-private
 * @param {?} dest
 * @param {?} source
 * @return {?}
 */
function extendStyles(dest, source) {
    for (var key in source) {
        if (source.hasOwnProperty(key)) {
            dest[(/** @type {?} */ (key))] = source[(/** @type {?} */ (key))];
        }
    }
    return dest;
}
/**
 * Toggles whether the native drag interactions should be enabled for an element.
 * \@docs-private
 * @param {?} element Element on which to toggle the drag interactions.
 * @param {?} enable Whether the drag interactions should be enabled.
 * @return {?}
 */
function toggleNativeDragInteractions(element, enable) {
    /** @type {?} */
    var userSelect = enable ? '' : 'none';
    extendStyles(element.style, {
        touchAction: enable ? '' : 'none',
        webkitUserDrag: enable ? '' : 'none',
        webkitTapHighlightColor: enable ? '' : 'transparent',
        userSelect: userSelect,
        msUserSelect: userSelect,
        webkitUserSelect: userSelect,
        MozUserSelect: userSelect
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Parses a CSS time value to milliseconds.
 * @param {?} value
 * @return {?}
 */
function parseCssTimeUnitsToMs(value) {
    // Some browsers will return it in seconds, whereas others will return milliseconds.
    /** @type {?} */
    var multiplier = value.toLowerCase().indexOf('ms') > -1 ? 1 : 1000;
    return parseFloat(value) * multiplier;
}
/**
 * Gets the transform transition duration, including the delay, of an element in milliseconds.
 * @param {?} element
 * @return {?}
 */
function getTransformTransitionDurationInMs(element) {
    /** @type {?} */
    var computedStyle = getComputedStyle(element);
    /** @type {?} */
    var transitionedProperties = parseCssPropertyValue(computedStyle, 'transition-property');
    /** @type {?} */
    var property = transitionedProperties.find(function (prop) { return prop === 'transform' || prop === 'all'; });
    // If there's no transition for `all` or `transform`, we shouldn't do anything.
    if (!property) {
        return 0;
    }
    // Get the index of the property that we're interested in and match
    // it up to the same index in `transition-delay` and `transition-duration`.
    /** @type {?} */
    var propertyIndex = transitionedProperties.indexOf(property);
    /** @type {?} */
    var rawDurations = parseCssPropertyValue(computedStyle, 'transition-duration');
    /** @type {?} */
    var rawDelays = parseCssPropertyValue(computedStyle, 'transition-delay');
    return parseCssTimeUnitsToMs(rawDurations[propertyIndex]) +
        parseCssTimeUnitsToMs(rawDelays[propertyIndex]);
}
/**
 * Parses out multiple values from a computed style into an array.
 * @param {?} computedStyle
 * @param {?} name
 * @return {?}
 */
function parseCssPropertyValue(computedStyle, name) {
    /** @type {?} */
    var value = computedStyle.getPropertyValue(name);
    return value.split(',').map(function (part) { return part.trim(); });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Options that can be used to bind a passive event listener.
 * @type {?}
 */
var passiveEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: true });
/**
 * Options that can be used to bind an active event listener.
 * @type {?}
 */
var activeEventListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({ passive: false });
/**
 * Time in milliseconds for which to ignore mouse events, after
 * receiving a touch event. Used to avoid doing double work for
 * touch devices where the browser fires fake mouse events, in
 * addition to touch events.
 * @type {?}
 */
var MOUSE_EVENT_IGNORE_TIME = 800;
/**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a draggable item. Used to manipulate or dispose of the item.
 * \@docs-private
 * @template T
 */
DragRef = /** @class */ (function () {
    function DragRef(element, _config, _document, _ngZone, _viewportRuler, _dragDropRegistry) {
        var _this = this;
        this._config = _config;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * CSS `transform` applied to the element when it isn't being dragged. We need a
         * passive transform in order for the dragged element to retain its new position
         * after the user has stopped dragging and because we need to know the relative
         * position in case they start dragging again. This corresponds to `element.style.transform`.
         */
        this._passiveTransform = { x: 0, y: 0 };
        /**
         * CSS `transform` that is applied to the element while it's being dragged.
         */
        this._activeTransform = { x: 0, y: 0 };
        /**
         * Emits when the item is being moved.
         */
        this._moveEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Amount of subscriptions to the move event. Used to avoid
         * hitting the zone if the consumer didn't subscribe to it.
         */
        this._moveEventSubscriptions = 0;
        /**
         * Subscription to pointer movement events.
         */
        this._pointerMoveSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Subscription to the event that is dispatched when the user lifts their pointer.
         */
        this._pointerUpSubscription = rxjs__WEBPACK_IMPORTED_MODULE_2__["Subscription"].EMPTY;
        /**
         * Cached reference to the boundary element.
         */
        this._boundaryElement = null;
        /**
         * Whether the native dragging interactions have been enabled on the root element.
         */
        this._nativeInteractionsEnabled = true;
        /**
         * Elements that can be used to drag the draggable item.
         */
        this._handles = [];
        /**
         * Registered handles that are currently disabled.
         */
        this._disabledHandles = new Set();
        /**
         * Layout direction of the item.
         */
        this._direction = 'ltr';
        this._disabled = false;
        /**
         * Emits as the drag sequence is being prepared.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._moveEvents.subscribe(observer);
            _this._moveEventSubscriptions++;
            return function () {
                subscription.unsubscribe();
                _this._moveEventSubscriptions--;
            };
        });
        /**
         * Handler for the `mousedown`/`touchstart` events.
         */
        this._pointerDown = function (event) {
            _this.beforeStarted.next();
            // Delegate the event based on whether it started from a handle or the element itself.
            if (_this._handles.length) {
                /** @type {?} */
                var targetHandle = _this._handles.find(function (handle) {
                    /** @type {?} */
                    var target = event.target;
                    return !!target && (target === handle || handle.contains((/** @type {?} */ (target))));
                });
                if (targetHandle && !_this._disabledHandles.has(targetHandle) && !_this.disabled) {
                    _this._initializeDragSequence(targetHandle, event);
                }
            }
            else if (!_this.disabled) {
                _this._initializeDragSequence(_this._rootElement, event);
            }
        };
        /**
         * Handler that is invoked when the user moves their pointer after they've initiated a drag.
         */
        this._pointerMove = function (event) {
            if (!_this._hasStartedDragging) {
                /** @type {?} */
                var pointerPosition = _this._getPointerPositionOnPage(event);
                /** @type {?} */
                var distanceX = Math.abs(pointerPosition.x - _this._pickupPositionOnPage.x);
                /** @type {?} */
                var distanceY = Math.abs(pointerPosition.y - _this._pickupPositionOnPage.y);
                // Only start dragging after the user has moved more than the minimum distance in either
                // direction. Note that this is preferrable over doing something like `skip(minimumDistance)`
                // in the `pointerMove` subscription, because we're not guaranteed to have one move event
                // per pixel of movement (e.g. if the user moves their pointer quickly).
                if (distanceX + distanceY >= _this._config.dragStartThreshold) {
                    _this._hasStartedDragging = true;
                    _this._ngZone.run(function () { return _this._startDragSequence(event); });
                }
                return;
            }
            // We only need the preview dimensions if we have a boundary element.
            if (_this._boundaryElement) {
                // Cache the preview element rect if we haven't cached it already or if
                // we cached it too early before the element dimensions were computed.
                if (!_this._previewRect || (!_this._previewRect.width && !_this._previewRect.height)) {
                    _this._previewRect = (_this._preview || _this._rootElement).getBoundingClientRect();
                }
            }
            /** @type {?} */
            var constrainedPointerPosition = _this._getConstrainedPointerPosition(event);
            _this._hasMoved = true;
            event.preventDefault();
            _this._updatePointerDirectionDelta(constrainedPointerPosition);
            if (_this._dropContainer) {
                _this._updateActiveDropContainer(constrainedPointerPosition);
            }
            else {
                /** @type {?} */
                var activeTransform = _this._activeTransform;
                activeTransform.x =
                    constrainedPointerPosition.x - _this._pickupPositionOnPage.x + _this._passiveTransform.x;
                activeTransform.y =
                    constrainedPointerPosition.y - _this._pickupPositionOnPage.y + _this._passiveTransform.y;
                /** @type {?} */
                var transform = getTransform(activeTransform.x, activeTransform.y);
                // Preserve the previous `transform` value, if there was one. Note that we apply our own
                // transform before the user's, because things like rotation can affect which direction
                // the element will be translated towards.
                _this._rootElement.style.transform = _this._initialTransform ?
                    transform + ' ' + _this._initialTransform : transform;
                // Apply transform as attribute if dragging and svg element to work for IE
                if (typeof SVGElement !== 'undefined' && _this._rootElement instanceof SVGElement) {
                    /** @type {?} */
                    var appliedTransform = "translate(" + activeTransform.x + " " + activeTransform.y + ")";
                    _this._rootElement.setAttribute('transform', appliedTransform);
                }
            }
            // Since this event gets fired for every pixel while dragging, we only
            // want to fire it if the consumer opted into it. Also we have to
            // re-enter the zone because we run all of the events on the outside.
            if (_this._moveEventSubscriptions > 0) {
                _this._ngZone.run(function () {
                    _this._moveEvents.next({
                        source: _this,
                        pointerPosition: constrainedPointerPosition,
                        event: event,
                        delta: _this._pointerDirectionDelta
                    });
                });
            }
        };
        /**
         * Handler that is invoked when the user lifts their pointer up, after initiating a drag.
         */
        this._pointerUp = function (event) {
            // Note that here we use `isDragging` from the service, rather than from `this`.
            // The difference is that the one from the service reflects whether a dragging sequence
            // has been initiated, whereas the one on `this` includes whether the user has passed
            // the minimum dragging threshold.
            if (!_this._dragDropRegistry.isDragging(_this)) {
                return;
            }
            _this._removeSubscriptions();
            _this._dragDropRegistry.stopDragging(_this);
            if (_this._handles) {
                _this._rootElement.style.webkitTapHighlightColor = _this._rootElementTapHighlight;
            }
            if (!_this._hasStartedDragging) {
                return;
            }
            _this.released.next({ source: _this });
            if (!_this._dropContainer) {
                // Convert the active transform into a passive one. This means that next time
                // the user starts dragging the item, its position will be calculated relatively
                // to the new passive transform.
                _this._passiveTransform.x = _this._activeTransform.x;
                _this._passiveTransform.y = _this._activeTransform.y;
                _this._ngZone.run(function () { return _this.ended.next({ source: _this }); });
                _this._dragDropRegistry.stopDragging(_this);
                return;
            }
            _this._animatePreviewToPlaceholder().then(function () {
                _this._cleanupDragArtifacts(event);
                _this._dragDropRegistry.stopDragging(_this);
            });
        };
        this.withRootElement(element);
        _dragDropRegistry.registerDragItem(this);
    }
    Object.defineProperty(DragRef.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || !!(this._dropContainer && this._dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            if (newValue !== this._disabled) {
                this._disabled = newValue;
                this._toggleNativeDragInteractions();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    DragRef.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._placeholder;
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    DragRef.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._rootElement;
    };
    /** Registers the handles that can be used to drag the element. */
    /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    DragRef.prototype.withHandles = /**
     * Registers the handles that can be used to drag the element.
     * @template THIS
     * @this {THIS}
     * @param {?} handles
     * @return {THIS}
     */
    function (handles) {
        (/** @type {?} */ (this))._handles = handles.map(function (handle) { return Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(handle); });
        (/** @type {?} */ (this))._handles.forEach(function (handle) { return toggleNativeDragInteractions(handle, false); });
        (/** @type {?} */ (this))._toggleNativeDragInteractions();
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag preview.
     * @param template Template that from which to stamp out the preview.
     */
    /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    DragRef.prototype.withPreviewTemplate = /**
     * Registers the template that should be used for the drag preview.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the preview.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._previewTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Registers the template that should be used for the drag placeholder.
     * @param template Template that from which to stamp out the placeholder.
     */
    /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    DragRef.prototype.withPlaceholderTemplate = /**
     * Registers the template that should be used for the drag placeholder.
     * @template THIS
     * @this {THIS}
     * @param {?} template Template that from which to stamp out the placeholder.
     * @return {THIS}
     */
    function (template) {
        (/** @type {?} */ (this))._placeholderTemplate = template;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     */
    /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    DragRef.prototype.withRootElement = /**
     * Sets an alternate drag root element. The root element is the element that will be moved as
     * the user is dragging. Passing an alternate root element is useful when trying to enable
     * dragging on an element that you might not have access to.
     * @template THIS
     * @this {THIS}
     * @param {?} rootElement
     * @return {THIS}
     */
    function (rootElement) {
        /** @type {?} */
        var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(rootElement);
        if (element !== (/** @type {?} */ (this))._rootElement) {
            if ((/** @type {?} */ (this))._rootElement) {
                (/** @type {?} */ (this))._removeRootElementListeners((/** @type {?} */ (this))._rootElement);
            }
            element.addEventListener('mousedown', (/** @type {?} */ (this))._pointerDown, activeEventListenerOptions);
            element.addEventListener('touchstart', (/** @type {?} */ (this))._pointerDown, passiveEventListenerOptions);
            (/** @type {?} */ (this))._initialTransform = undefined;
            (/** @type {?} */ (this))._rootElement = element;
        }
        return (/** @type {?} */ (this));
    };
    /**
     * Element to which the draggable's position will be constrained.
     */
    /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    DragRef.prototype.withBoundaryElement = /**
     * Element to which the draggable's position will be constrained.
     * @template THIS
     * @this {THIS}
     * @param {?} boundaryElement
     * @return {THIS}
     */
    function (boundaryElement) {
        (/** @type {?} */ (this))._boundaryElement = boundaryElement ? Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceElement"])(boundaryElement) : null;
        return (/** @type {?} */ (this));
    };
    /** Removes the dragging functionality from the DOM element. */
    /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    DragRef.prototype.dispose = /**
     * Removes the dragging functionality from the DOM element.
     * @return {?}
     */
    function () {
        this._removeRootElementListeners(this._rootElement);
        // Do this check before removing from the registry since it'll
        // stop being considered as dragged once it is removed.
        if (this.isDragging()) {
            // Since we move out the element to the end of the body while it's being
            // dragged, we have to make sure that it's removed if it gets destroyed.
            removeElement(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._dragDropRegistry.removeDragItem(this);
        this._removeSubscriptions();
        this.beforeStarted.complete();
        this.started.complete();
        this.released.complete();
        this.ended.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this._moveEvents.complete();
        this._handles = [];
        this._disabledHandles.clear();
        this._dropContainer = undefined;
        this._boundaryElement = this._rootElement = this._placeholderTemplate =
            this._previewTemplate = this._nextSibling = (/** @type {?} */ (null));
    };
    /** Checks whether the element is currently being dragged. */
    /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    DragRef.prototype.isDragging = /**
     * Checks whether the element is currently being dragged.
     * @return {?}
     */
    function () {
        return this._hasStartedDragging && this._dragDropRegistry.isDragging(this);
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    DragRef.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._rootElement.style.transform = this._initialTransform || '';
        this._activeTransform = { x: 0, y: 0 };
        this._passiveTransform = { x: 0, y: 0 };
    };
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param handle Handle element that should be disabled.
     */
    /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    DragRef.prototype.disableHandle = /**
     * Sets a handle as disabled. While a handle is disabled, it'll capture and interrupt dragging.
     * @param {?} handle Handle element that should be disabled.
     * @return {?}
     */
    function (handle) {
        if (this._handles.indexOf(handle) > -1) {
            this._disabledHandles.add(handle);
        }
    };
    /**
     * Enables a handle, if it has been disabled.
     * @param handle Handle element to be enabled.
     */
    /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    DragRef.prototype.enableHandle = /**
     * Enables a handle, if it has been disabled.
     * @param {?} handle Handle element to be enabled.
     * @return {?}
     */
    function (handle) {
        this._disabledHandles.delete(handle);
    };
    /** Sets the layout direction of the draggable item. */
    /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DragRef.prototype.withDirection = /**
     * Sets the layout direction of the draggable item.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /** Sets the container that the item is part of. */
    /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    DragRef.prototype._withDropContainer = /**
     * Sets the container that the item is part of.
     * @param {?} container
     * @return {?}
     */
    function (container) {
        this._dropContainer = container;
    };
    /** Unsubscribes from the global subscriptions. */
    /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    DragRef.prototype._removeSubscriptions = /**
     * Unsubscribes from the global subscriptions.
     * @private
     * @return {?}
     */
    function () {
        this._pointerMoveSubscription.unsubscribe();
        this._pointerUpSubscription.unsubscribe();
    };
    /** Destroys the preview element and its ViewRef. */
    /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPreview = /**
     * Destroys the preview element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._preview) {
            removeElement(this._preview);
        }
        if (this._previewRef) {
            this._previewRef.destroy();
        }
        this._preview = this._previewRef = (/** @type {?} */ (null));
    };
    /** Destroys the placeholder element and its ViewRef. */
    /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    DragRef.prototype._destroyPlaceholder = /**
     * Destroys the placeholder element and its ViewRef.
     * @private
     * @return {?}
     */
    function () {
        if (this._placeholder) {
            removeElement(this._placeholder);
        }
        if (this._placeholderRef) {
            this._placeholderRef.destroy();
        }
        this._placeholder = this._placeholderRef = (/** @type {?} */ (null));
    };
    /** Starts the dragging sequence. */
    /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._startDragSequence = /**
     * Starts the dragging sequence.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // Emit the event on the item before the one on the container.
        this.started.next({ source: this });
        if (isTouchEvent(event)) {
            this._lastTouchEventTime = Date.now();
        }
        if (this._dropContainer) {
            /** @type {?} */
            var element = this._rootElement;
            // Grab the `nextSibling` before the preview and placeholder
            // have been created so we don't get the preview by accident.
            this._nextSibling = element.nextSibling;
            /** @type {?} */
            var preview = this._preview = this._createPreviewElement();
            /** @type {?} */
            var placeholder = this._placeholder = this._createPlaceholderElement();
            // We move the element out at the end of the body and we make it hidden, because keeping it in
            // place will throw off the consumer's `:last-child` selectors. We can't remove the element
            // from the DOM completely, because iOS will stop firing all subsequent events in the chain.
            element.style.display = 'none';
            this._document.body.appendChild((/** @type {?} */ (element.parentNode)).replaceChild(placeholder, element));
            this._document.body.appendChild(preview);
            this._dropContainer.start();
        }
    };
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @param referenceElement Element that started the drag sequence.
     * @param event Browser event object that started the sequence.
     */
    /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    DragRef.prototype._initializeDragSequence = /**
     * Sets up the different variables and subscriptions
     * that will be necessary for the dragging sequence.
     * @private
     * @param {?} referenceElement Element that started the drag sequence.
     * @param {?} event Browser event object that started the sequence.
     * @return {?}
     */
    function (referenceElement, event) {
        // Always stop propagation for the event that initializes
        // the dragging sequence, in order to prevent it from potentially
        // starting another sequence for a draggable parent somewhere up the DOM tree.
        event.stopPropagation();
        /** @type {?} */
        var isDragging = this.isDragging();
        /** @type {?} */
        var isTouchSequence = isTouchEvent(event);
        /** @type {?} */
        var isAuxiliaryMouseButton = !isTouchSequence && ((/** @type {?} */ (event))).button !== 0;
        /** @type {?} */
        var rootElement = this._rootElement;
        /** @type {?} */
        var isSyntheticEvent = !isTouchSequence && this._lastTouchEventTime &&
            this._lastTouchEventTime + MOUSE_EVENT_IGNORE_TIME > Date.now();
        // If the event started from an element with the native HTML drag&drop, it'll interfere
        // with our own dragging (e.g. `img` tags do it by default). Prevent the default action
        // to stop it from happening. Note that preventing on `dragstart` also seems to work, but
        // it's flaky and it fails if the user drags it away quickly. Also note that we only want
        // to do this for `mousedown` since doing the same for `touchstart` will stop any `click`
        // events from firing on touch devices.
        if (event.target && ((/** @type {?} */ (event.target))).draggable && event.type === 'mousedown') {
            event.preventDefault();
        }
        // Abort if the user is already dragging or is using a mouse button other than the primary one.
        if (isDragging || isAuxiliaryMouseButton || isSyntheticEvent) {
            return;
        }
        // Cache the previous transform amount only after the first drag sequence, because
        // we don't want our own transforms to stack on top of each other.
        if (this._initialTransform == null) {
            this._initialTransform = this._rootElement.style.transform || '';
        }
        // If we've got handles, we need to disable the tap highlight on the entire root element,
        // otherwise iOS will still add it, even though all the drag interactions on the handle
        // are disabled.
        if (this._handles.length) {
            this._rootElementTapHighlight = rootElement.style.webkitTapHighlightColor;
            rootElement.style.webkitTapHighlightColor = 'transparent';
        }
        this._toggleNativeDragInteractions();
        this._hasStartedDragging = this._hasMoved = false;
        this._initialContainer = (/** @type {?} */ (this._dropContainer));
        this._pointerMoveSubscription = this._dragDropRegistry.pointerMove.subscribe(this._pointerMove);
        this._pointerUpSubscription = this._dragDropRegistry.pointerUp.subscribe(this._pointerUp);
        this._scrollPosition = this._viewportRuler.getViewportScrollPosition();
        if (this._boundaryElement) {
            this._boundaryRect = this._boundaryElement.getBoundingClientRect();
        }
        // If we have a custom preview template, the element won't be visible anyway so we avoid the
        // extra `getBoundingClientRect` calls and just move the preview next to the cursor.
        this._pickupPositionInElement = this._previewTemplate && this._previewTemplate.template ?
            { x: 0, y: 0 } :
            this._getPointerPositionInElement(referenceElement, event);
        /** @type {?} */
        var pointerPosition = this._pickupPositionOnPage = this._getPointerPositionOnPage(event);
        this._pointerDirectionDelta = { x: 0, y: 0 };
        this._pointerPositionAtLastDirectionChange = { x: pointerPosition.x, y: pointerPosition.y };
        this._dragDropRegistry.startDragging(this, event);
    };
    /** Cleans up the DOM artifacts that were added to facilitate the element being dragged. */
    /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._cleanupDragArtifacts = /**
     * Cleans up the DOM artifacts that were added to facilitate the element being dragged.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        // Restore the element's visibility and insert it at its old position in the DOM.
        // It's important that we maintain the position, because moving the element around in the DOM
        // can throw off `NgFor` which does smart diffing and re-creates elements only when necessary,
        // while moving the existing elements in all other cases.
        this._rootElement.style.display = '';
        if (this._nextSibling) {
            (/** @type {?} */ (this._nextSibling.parentNode)).insertBefore(this._rootElement, this._nextSibling);
        }
        else {
            this._initialContainer.element.appendChild(this._rootElement);
        }
        this._destroyPreview();
        this._destroyPlaceholder();
        this._boundaryRect = this._previewRect = undefined;
        // Re-enter the NgZone since we bound `document` events on the outside.
        this._ngZone.run(function () {
            /** @type {?} */
            var container = (/** @type {?} */ (_this._dropContainer));
            /** @type {?} */
            var currentIndex = container.getItemIndex(_this);
            var _a = _this._getPointerPositionOnPage(event), x = _a.x, y = _a.y;
            /** @type {?} */
            var isPointerOverContainer = container._isOverContainer(x, y);
            _this.ended.next({ source: _this });
            _this.dropped.next({
                item: _this,
                currentIndex: currentIndex,
                previousIndex: _this._initialContainer.getItemIndex(_this),
                container: container,
                previousContainer: _this._initialContainer,
                isPointerOverContainer: isPointerOverContainer
            });
            container.drop(_this, currentIndex, _this._initialContainer, isPointerOverContainer);
            _this._dropContainer = _this._initialContainer;
        });
    };
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     */
    /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    DragRef.prototype._updateActiveDropContainer = /**
     * Updates the item's position in its drop container, or moves it
     * into a new one, depending on its current drag position.
     * @private
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var _this = this;
        var x = _a.x, y = _a.y;
        // Drop container that draggable has been moved into.
        /** @type {?} */
        var newContainer = (/** @type {?} */ (this._dropContainer))._getSiblingContainerFromPosition(this, x, y) ||
            this._initialContainer._getSiblingContainerFromPosition(this, x, y);
        // If we couldn't find a new container to move the item into, and the item has left it's
        // initial container, check whether the it's over the initial container. This handles the
        // case where two containers are connected one way and the user tries to undo dragging an
        // item into a new container.
        if (!newContainer && this._dropContainer !== this._initialContainer &&
            this._initialContainer._isOverContainer(x, y)) {
            newContainer = this._initialContainer;
        }
        if (newContainer && newContainer !== this._dropContainer) {
            this._ngZone.run(function () {
                // Notify the old container that the item has left.
                _this.exited.next({ item: _this, container: (/** @type {?} */ (_this._dropContainer)) });
                (/** @type {?} */ (_this._dropContainer)).exit(_this);
                // Notify the new container that the item has entered.
                _this.entered.next({ item: _this, container: (/** @type {?} */ (newContainer)) });
                _this._dropContainer = (/** @type {?} */ (newContainer));
                _this._dropContainer.enter(_this, x, y);
            });
        }
        (/** @type {?} */ (this._dropContainer))._sortItem(this, x, y, this._pointerDirectionDelta);
        this._preview.style.transform =
            getTransform(x - this._pickupPositionInElement.x, y - this._pickupPositionInElement.y);
    };
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     */
    /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPreviewElement = /**
     * Creates the element that will be rendered next to the user's pointer
     * and will be used as a preview of the element that is being dragged.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previewConfig = this._previewTemplate;
        /** @type {?} */
        var previewTemplate = previewConfig ? previewConfig.template : null;
        /** @type {?} */
        var preview;
        if (previewTemplate) {
            /** @type {?} */
            var viewRef = (/** @type {?} */ (previewConfig)).viewContainer.createEmbeddedView(previewTemplate, (/** @type {?} */ (previewConfig)).context);
            preview = viewRef.rootNodes[0];
            this._previewRef = viewRef;
            preview.style.transform =
                getTransform(this._pickupPositionOnPage.x, this._pickupPositionOnPage.y);
        }
        else {
            /** @type {?} */
            var element = this._rootElement;
            /** @type {?} */
            var elementRect = element.getBoundingClientRect();
            preview = deepCloneNode(element);
            preview.style.width = elementRect.width + "px";
            preview.style.height = elementRect.height + "px";
            preview.style.transform = getTransform(elementRect.left, elementRect.top);
        }
        extendStyles(preview.style, {
            // It's important that we disable the pointer events on the preview, because
            // it can throw off the `document.elementFromPoint` calls in the `CdkDropList`.
            pointerEvents: 'none',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '1000'
        });
        toggleNativeDragInteractions(preview, false);
        preview.classList.add('cdk-drag-preview');
        preview.setAttribute('dir', this._direction);
        return preview;
    };
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @returns Promise that resolves when the animation completes.
     */
    /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    DragRef.prototype._animatePreviewToPlaceholder = /**
     * Animates the preview element from its current position to the location of the drop placeholder.
     * @private
     * @return {?} Promise that resolves when the animation completes.
     */
    function () {
        var _this = this;
        // If the user hasn't moved yet, the transitionend event won't fire.
        if (!this._hasMoved) {
            return Promise.resolve();
        }
        /** @type {?} */
        var placeholderRect = this._placeholder.getBoundingClientRect();
        // Apply the class that adds a transition to the preview.
        this._preview.classList.add('cdk-drag-animating');
        // Move the preview to the placeholder position.
        this._preview.style.transform = getTransform(placeholderRect.left, placeholderRect.top);
        // If the element doesn't have a `transition`, the `transitionend` event won't fire. Since
        // we need to trigger a style recalculation in order for the `cdk-drag-animating` class to
        // apply its style, we take advantage of the available info to figure out whether we need to
        // bind the event in the first place.
        /** @type {?} */
        var duration = getTransformTransitionDurationInMs(this._preview);
        if (duration === 0) {
            return Promise.resolve();
        }
        return this._ngZone.runOutsideAngular(function () {
            return new Promise(function (resolve) {
                /** @type {?} */
                var handler = (/** @type {?} */ ((function (event) {
                    if (!event || (event.target === _this._preview && event.propertyName === 'transform')) {
                        _this._preview.removeEventListener('transitionend', handler);
                        resolve();
                        clearTimeout(timeout);
                    }
                })));
                // If a transition is short enough, the browser might not fire the `transitionend` event.
                // Since we know how long it's supposed to take, add a timeout with a 50% buffer that'll
                // fire if the transition hasn't completed when it was supposed to.
                /** @type {?} */
                var timeout = setTimeout((/** @type {?} */ (handler)), duration * 1.5);
                _this._preview.addEventListener('transitionend', handler);
            });
        });
    };
    /** Creates an element that will be shown instead of the current element while dragging. */
    /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    DragRef.prototype._createPlaceholderElement = /**
     * Creates an element that will be shown instead of the current element while dragging.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var placeholderConfig = this._placeholderTemplate;
        /** @type {?} */
        var placeholderTemplate = placeholderConfig ? placeholderConfig.template : null;
        /** @type {?} */
        var placeholder;
        if (placeholderTemplate) {
            this._placeholderRef = (/** @type {?} */ (placeholderConfig)).viewContainer.createEmbeddedView(placeholderTemplate, (/** @type {?} */ (placeholderConfig)).context);
            placeholder = this._placeholderRef.rootNodes[0];
        }
        else {
            placeholder = deepCloneNode(this._rootElement);
        }
        placeholder.classList.add('cdk-drag-placeholder');
        return placeholder;
    };
    /**
     * Figures out the coordinates at which an element was picked up.
     * @param referenceElement Element that initiated the dragging.
     * @param event Event that initiated the dragging.
     */
    /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragRef.prototype._getPointerPositionInElement = /**
     * Figures out the coordinates at which an element was picked up.
     * @private
     * @param {?} referenceElement Element that initiated the dragging.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (referenceElement, event) {
        /** @type {?} */
        var elementRect = this._rootElement.getBoundingClientRect();
        /** @type {?} */
        var handleElement = referenceElement === this._rootElement ? null : referenceElement;
        /** @type {?} */
        var referenceRect = handleElement ? handleElement.getBoundingClientRect() : elementRect;
        /** @type {?} */
        var point = isTouchEvent(event) ? event.targetTouches[0] : event;
        /** @type {?} */
        var x = point.pageX - referenceRect.left - this._scrollPosition.left;
        /** @type {?} */
        var y = point.pageY - referenceRect.top - this._scrollPosition.top;
        return {
            x: referenceRect.left - elementRect.left + x,
            y: referenceRect.top - elementRect.top + y
        };
    };
    /** Determines the point of the page that was touched by the user. */
    /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getPointerPositionOnPage = /**
     * Determines the point of the page that was touched by the user.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
        /** @type {?} */
        var point = isTouchEvent(event) ? (event.touches[0] || event.changedTouches[0]) : event;
        return {
            x: point.pageX - this._scrollPosition.left,
            y: point.pageY - this._scrollPosition.top
        };
    };
    /** Gets the pointer position on the page, accounting for any position constraints. */
    /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    DragRef.prototype._getConstrainedPointerPosition = /**
     * Gets the pointer position on the page, accounting for any position constraints.
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var point = this._getPointerPositionOnPage(event);
        /** @type {?} */
        var dropContainerLock = this._dropContainer ? this._dropContainer.lockAxis : null;
        if (this.lockAxis === 'x' || dropContainerLock === 'x') {
            point.y = this._pickupPositionOnPage.y;
        }
        else if (this.lockAxis === 'y' || dropContainerLock === 'y') {
            point.x = this._pickupPositionOnPage.x;
        }
        if (this._boundaryRect) {
            var _a = this._pickupPositionInElement, pickupX = _a.x, pickupY = _a.y;
            /** @type {?} */
            var boundaryRect = this._boundaryRect;
            /** @type {?} */
            var previewRect = (/** @type {?} */ (this._previewRect));
            /** @type {?} */
            var minY = boundaryRect.top + pickupY;
            /** @type {?} */
            var maxY = boundaryRect.bottom - (previewRect.height - pickupY);
            /** @type {?} */
            var minX = boundaryRect.left + pickupX;
            /** @type {?} */
            var maxX = boundaryRect.right - (previewRect.width - pickupX);
            point.x = clamp(point.x, minX, maxX);
            point.y = clamp(point.y, minY, maxY);
        }
        return point;
    };
    /** Updates the current drag delta, based on the user's current pointer position on the page. */
    /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    DragRef.prototype._updatePointerDirectionDelta = /**
     * Updates the current drag delta, based on the user's current pointer position on the page.
     * @private
     * @param {?} pointerPositionOnPage
     * @return {?}
     */
    function (pointerPositionOnPage) {
        var x = pointerPositionOnPage.x, y = pointerPositionOnPage.y;
        /** @type {?} */
        var delta = this._pointerDirectionDelta;
        /** @type {?} */
        var positionSinceLastChange = this._pointerPositionAtLastDirectionChange;
        // Amount of pixels the user has dragged since the last time the direction changed.
        /** @type {?} */
        var changeX = Math.abs(x - positionSinceLastChange.x);
        /** @type {?} */
        var changeY = Math.abs(y - positionSinceLastChange.y);
        // Because we handle pointer events on a per-pixel basis, we don't want the delta
        // to change for every pixel, otherwise anything that depends on it can look erratic.
        // To make the delta more consistent, we track how much the user has moved since the last
        // delta change and we only update it after it has reached a certain threshold.
        if (changeX > this._config.pointerDirectionChangeThreshold) {
            delta.x = x > positionSinceLastChange.x ? 1 : -1;
            positionSinceLastChange.x = x;
        }
        if (changeY > this._config.pointerDirectionChangeThreshold) {
            delta.y = y > positionSinceLastChange.y ? 1 : -1;
            positionSinceLastChange.y = y;
        }
        return delta;
    };
    /** Toggles the native drag interactions, based on how many handles are registered. */
    /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    DragRef.prototype._toggleNativeDragInteractions = /**
     * Toggles the native drag interactions, based on how many handles are registered.
     * @private
     * @return {?}
     */
    function () {
        if (!this._rootElement || !this._handles) {
            return;
        }
        /** @type {?} */
        var shouldEnable = this.disabled || this._handles.length > 0;
        if (shouldEnable !== this._nativeInteractionsEnabled) {
            this._nativeInteractionsEnabled = shouldEnable;
            toggleNativeDragInteractions(this._rootElement, shouldEnable);
        }
    };
    /** Removes the manually-added event listeners from the root element. */
    /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    DragRef.prototype._removeRootElementListeners = /**
     * Removes the manually-added event listeners from the root element.
     * @private
     * @param {?} element
     * @return {?}
     */
    function (element) {
        element.removeEventListener('mousedown', this._pointerDown, activeEventListenerOptions);
        element.removeEventListener('touchstart', this._pointerDown, passiveEventListenerOptions);
    };
    return DragRef;
}());
/**
 * Gets a 3d `transform` that can be applied to an element.
 * @param {?} x Desired position of the element along the X axis.
 * @param {?} y Desired position of the element along the Y axis.
 * @return {?}
 */
function getTransform(x, y) {
    // Round the transforms since some browsers will
    // blur the elements for sub-pixel transforms.
    return "translate3d(" + Math.round(x) + "px, " + Math.round(y) + "px, 0)";
}
/**
 * Creates a deep clone of an element.
 * @param {?} node
 * @return {?}
 */
function deepCloneNode(node) {
    /** @type {?} */
    var clone = (/** @type {?} */ (node.cloneNode(true)));
    // Remove the `id` to avoid having multiple elements with the same id on the page.
    clone.removeAttribute('id');
    return clone;
}
/**
 * Clamps a value between a minimum and a maximum.
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
}
/**
 * Helper to remove an element from the DOM and to do all the necessary null checks.
 * @param {?} element Element to be removed.
 * @return {?}
 */
function removeElement(element) {
    if (element && element.parentNode) {
        element.parentNode.removeChild(element);
    }
}
/**
 * Determines whether an event is a touch event.
 * @param {?} event
 * @return {?}
 */
function isTouchEvent(event) {
    return event.type.startsWith('touch');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * Moves an item one index in an array to another.
 * @template T
 * @param {?} array Array in which to move the item.
 * @param {?} fromIndex Starting index of the item.
 * @param {?} toIndex Index to which the item should be moved.
 * @return {?}
 */
function moveItemInArray(array, fromIndex, toIndex) {
    /** @type {?} */
    var from = clamp$1(fromIndex, array.length - 1);
    /** @type {?} */
    var to = clamp$1(toIndex, array.length - 1);
    if (from === to) {
        return;
    }
    /** @type {?} */
    var target = array[from];
    /** @type {?} */
    var delta = to < from ? -1 : 1;
    for (var i = from; i !== to; i += delta) {
        array[i] = array[i + delta];
    }
    array[to] = target;
}
/**
 * Moves an item from one array to another.
 * @template T
 * @param {?} currentArray Array from which to transfer the item.
 * @param {?} targetArray Array into which to put the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 * @return {?}
 */
function transferArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var from = clamp$1(currentIndex, currentArray.length - 1);
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray.splice(from, 1)[0]);
    }
}
/**
 * Copies an item from one array to another, leaving it in its
 * original position in current array.
 * @template T
 * @param {?} currentArray Array from which to copy the item.
 * @param {?} targetArray Array into which is copy the item.
 * @param {?} currentIndex Index of the item in its current array.
 * @param {?} targetIndex Index at which to insert the item.
 *
 * @return {?}
 */
function copyArrayItem(currentArray, targetArray, currentIndex, targetIndex) {
    /** @type {?} */
    var to = clamp$1(targetIndex, targetArray.length);
    if (currentArray.length) {
        targetArray.splice(to, 0, currentArray[currentIndex]);
    }
}
/**
 * Clamps a number between zero and a maximum.
 * @param {?} value
 * @param {?} max
 * @return {?}
 */
function clamp$1(value, max) {
    return Math.max(0, Math.min(max, value));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop refs.
 * @type {?}
 */
var _uniqueIdCounter = 0;
/**
 * Proximity, as a ratio to width/height, at which a
 * dragged item will affect the drop container.
 * @type {?}
 */
var DROP_PROXIMITY_THRESHOLD = 0.05;
/**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
var  /**
 * Reference to a drop list. Used to manipulate or dispose of the container.
 * \@docs-private
 * @template T
 */
DropListRef = /** @class */ (function () {
    function DropListRef(element, _dragDropRegistry, _document) {
        this._dragDropRegistry = _dragDropRegistry;
        /**
         * Unique ID for the drop list.
         * @deprecated No longer being used. To be removed.
         * \@breaking-change 8.0.0
         */
        this.id = "cdk-drop-list-ref-" + _uniqueIdCounter++;
        /**
         * Whether starting a dragging sequence from this container is disabled.
         */
        this.disabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /**
         * Emits right before dragging has started.
         */
        this.beforeStarted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Whether an item in the list is being dragged.
         */
        this._isDragging = false;
        /**
         * Cache of the dimensions of all the items inside the container.
         */
        this._itemPositions = [];
        /**
         * Keeps track of the item that was last swapped with the dragged item, as
         * well as what direction the pointer was moving in when the swap occured.
         */
        this._previousSwap = { drag: (/** @type {?} */ (null)), delta: 0 };
        /**
         * Drop lists that are connected to the current one.
         */
        this._siblings = [];
        /**
         * Direction in which the list is oriented.
         */
        this._orientation = 'vertical';
        /**
         * Connected siblings that currently have a dragged item.
         */
        this._activeSiblings = new Set();
        /**
         * Layout direction of the drop list.
         */
        this._direction = 'ltr';
        _dragDropRegistry.registerDropContainer(this);
        this._document = _document;
        this.element = element instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] ? element.nativeElement : element;
    }
    /** Removes the drop list functionality from the DOM element. */
    /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    DropListRef.prototype.dispose = /**
     * Removes the drop list functionality from the DOM element.
     * @return {?}
     */
    function () {
        this.beforeStarted.complete();
        this.entered.complete();
        this.exited.complete();
        this.dropped.complete();
        this.sorted.complete();
        this._activeSiblings.clear();
        this._dragDropRegistry.removeDropContainer(this);
    };
    /** Whether an item from this list is currently being dragged. */
    /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    DropListRef.prototype.isDragging = /**
     * Whether an item from this list is currently being dragged.
     * @return {?}
     */
    function () {
        return this._isDragging;
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    DropListRef.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        var _this = this;
        this.beforeStarted.next();
        this._isDragging = true;
        this._activeDraggables = this._draggables.slice();
        this._cacheOwnPosition();
        this._cacheItemPositions();
        this._siblings.forEach(function (sibling) { return sibling._startReceiving(_this); });
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this.entered.next({ item: item, container: this });
        this.start();
        // We use the coordinates of where the item entered the drop
        // zone to figure out at which index it should be inserted.
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY);
        /** @type {?} */
        var currentIndex = this._activeDraggables.indexOf(item);
        /** @type {?} */
        var newPositionReference = this._activeDraggables[newIndex];
        /** @type {?} */
        var placeholder = item.getPlaceholderElement();
        // Since the item may be in the `activeDraggables` already (e.g. if the user dragged it
        // into another container and back again), we have to ensure that it isn't duplicated.
        if (currentIndex > -1) {
            this._activeDraggables.splice(currentIndex, 1);
        }
        // Don't use items that are being dragged as a reference, because
        // their element has been moved down to the bottom of the body.
        if (newPositionReference && !this._dragDropRegistry.isDragging(newPositionReference)) {
            /** @type {?} */
            var element = newPositionReference.getRootElement();
            (/** @type {?} */ (element.parentElement)).insertBefore(placeholder, element);
            this._activeDraggables.splice(newIndex, 0, item);
        }
        else {
            this.element.appendChild(placeholder);
            this._activeDraggables.push(item);
        }
        // The transform needs to be cleared so it doesn't throw off the measurements.
        placeholder.style.transform = '';
        // Note that the positions were already cached when we called `start` above,
        // but we need to refresh them since the amount of items has changed.
        this._cacheItemPositions();
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    DropListRef.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._reset();
        this.exited.next({ item: item, container: this });
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    DropListRef.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._reset();
        this.dropped.next({
            item: item,
            currentIndex: currentIndex,
            previousIndex: previousContainer.getItemIndex(item),
            container: this,
            previousContainer: previousContainer,
            isPointerOverContainer: isPointerOverContainer
        });
    };
    /**
     * Sets the draggable items that are a part of this list.
     * @param items Items that are a part of this list.
     */
    /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    DropListRef.prototype.withItems = /**
     * Sets the draggable items that are a part of this list.
     * @template THIS
     * @this {THIS}
     * @param {?} items Items that are a part of this list.
     * @return {THIS}
     */
    function (items) {
        var _this = this;
        (/** @type {?} */ (this))._draggables = items;
        items.forEach(function (item) { return item._withDropContainer((/** @type {?} */ (_this))); });
        return (/** @type {?} */ (this));
    };
    /** Sets the layout direction of the drop list. */
    /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    DropListRef.prototype.withDirection = /**
     * Sets the layout direction of the drop list.
     * @template THIS
     * @this {THIS}
     * @param {?} direction
     * @return {THIS}
     */
    function (direction) {
        (/** @type {?} */ (this))._direction = direction;
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @param connectedTo Other containers that the current containers should be connected to.
     */
    /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    DropListRef.prototype.connectedTo = /**
     * Sets the containers that are connected to this one. When two or more containers are
     * connected, the user will be allowed to transfer items between them.
     * @template THIS
     * @this {THIS}
     * @param {?} connectedTo Other containers that the current containers should be connected to.
     * @return {THIS}
     */
    function (connectedTo) {
        (/** @type {?} */ (this))._siblings = connectedTo.slice();
        return (/** @type {?} */ (this));
    };
    /**
     * Sets the orientation of the container.
     * @param orientation New orientation for the container.
     */
    /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    DropListRef.prototype.withOrientation = /**
     * Sets the orientation of the container.
     * @template THIS
     * @this {THIS}
     * @param {?} orientation New orientation for the container.
     * @return {THIS}
     */
    function (orientation) {
        (/** @type {?} */ (this))._orientation = orientation;
        return (/** @type {?} */ (this));
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    DropListRef.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        if (!this._isDragging) {
            return this._draggables.indexOf(item);
        }
        // Items are sorted always by top/left in the cache, however they flow differently in RTL.
        // The rest of the logic still stands no matter what orientation we're in, however
        // we need to invert the array when determining the index.
        /** @type {?} */
        var items = this._orientation === 'horizontal' && this._direction === 'rtl' ?
            this._itemPositions.slice().reverse() : this._itemPositions;
        return findIndex(items, function (currentItem) { return currentItem.drag === item; });
    };
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     */
    /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    DropListRef.prototype.isReceiving = /**
     * Whether the list is able to receive the item that
     * is currently being dragged inside a connected drop list.
     * @return {?}
     */
    function () {
        return this._activeSiblings.size > 0;
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    DropListRef.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        // Don't sort the item if it's out of range.
        if (!this._isPointerNearDropContainer(pointerX, pointerY)) {
            return;
        }
        /** @type {?} */
        var siblings = this._itemPositions;
        /** @type {?} */
        var newIndex = this._getItemIndexFromPointerPosition(item, pointerX, pointerY, pointerDelta);
        if (newIndex === -1 && siblings.length > 0) {
            return;
        }
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentIndex = findIndex(siblings, function (currentItem) { return currentItem.drag === item; });
        /** @type {?} */
        var siblingAtNewPosition = siblings[newIndex];
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var newPosition = siblingAtNewPosition.clientRect;
        /** @type {?} */
        var delta = currentIndex > newIndex ? 1 : -1;
        this._previousSwap.drag = siblingAtNewPosition.drag;
        this._previousSwap.delta = isHorizontal ? pointerDelta.x : pointerDelta.y;
        // How many pixels the item's placeholder should be offset.
        /** @type {?} */
        var itemOffset = this._getItemOffsetPx(currentPosition, newPosition, delta);
        // How many pixels all the other items should be offset.
        /** @type {?} */
        var siblingOffset = this._getSiblingOffsetPx(currentIndex, siblings, delta);
        // Save the previous order of the items before moving the item to its new index.
        // We use this to check whether an item has been moved as a result of the sorting.
        /** @type {?} */
        var oldOrder = siblings.slice();
        // Shuffle the array in place.
        moveItemInArray(siblings, currentIndex, newIndex);
        this.sorted.next({
            previousIndex: currentIndex,
            currentIndex: newIndex,
            container: this,
            item: item
        });
        siblings.forEach(function (sibling, index) {
            // Don't do anything if the position hasn't changed.
            if (oldOrder[index] === sibling) {
                return;
            }
            /** @type {?} */
            var isDraggedItem = sibling.drag === item;
            /** @type {?} */
            var offset = isDraggedItem ? itemOffset : siblingOffset;
            /** @type {?} */
            var elementToOffset = isDraggedItem ? item.getPlaceholderElement() :
                sibling.drag.getRootElement();
            // Update the offset to reflect the new position.
            sibling.offset += offset;
            // Since we're moving the items with a `transform`, we need to adjust their cached
            // client rects to reflect their new position, as well as swap their positions in the cache.
            // Note that we shouldn't use `getBoundingClientRect` here to update the cache, because the
            // elements may be mid-animation which will give us a wrong result.
            if (isHorizontal) {
                // Round the transforms since some browsers will
                // blur the elements, for sub-pixel transforms.
                elementToOffset.style.transform = "translate3d(" + Math.round(sibling.offset) + "px, 0, 0)";
                adjustClientRect(sibling.clientRect, 0, offset);
            }
            else {
                elementToOffset.style.transform = "translate3d(0, " + Math.round(sibling.offset) + "px, 0)";
                adjustClientRect(sibling.clientRect, offset, 0);
            }
        });
    };
    /** Caches the position of the drop list. */
    /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheOwnPosition = /**
     * Caches the position of the drop list.
     * @private
     * @return {?}
     */
    function () {
        this._clientRect = this.element.getBoundingClientRect();
    };
    /** Refreshes the position cache of the items and sibling containers. */
    /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    DropListRef.prototype._cacheItemPositions = /**
     * Refreshes the position cache of the items and sibling containers.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        this._itemPositions = this._activeDraggables.map(function (drag) {
            /** @type {?} */
            var elementToMeasure = _this._dragDropRegistry.isDragging(drag) ?
                // If the element is being dragged, we have to measure the
                // placeholder, because the element is hidden.
                drag.getPlaceholderElement() :
                drag.getRootElement();
            /** @type {?} */
            var clientRect = elementToMeasure.getBoundingClientRect();
            return {
                drag: drag,
                offset: 0,
                // We need to clone the `clientRect` here, because all the values on it are readonly
                // and we need to be able to update them. Also we can't use a spread here, because
                // the values on a `ClientRect` aren't own properties. See:
                // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect#Notes
                clientRect: {
                    top: clientRect.top,
                    right: clientRect.right,
                    bottom: clientRect.bottom,
                    left: clientRect.left,
                    width: clientRect.width,
                    height: clientRect.height
                }
            };
        }).sort(function (a, b) {
            return isHorizontal ? a.clientRect.left - b.clientRect.left :
                a.clientRect.top - b.clientRect.top;
        });
    };
    /** Resets the container to its initial state. */
    /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    DropListRef.prototype._reset = /**
     * Resets the container to its initial state.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._isDragging = false;
        // TODO(crisbeto): may have to wait for the animations to finish.
        this._activeDraggables.forEach(function (item) { return item.getRootElement().style.transform = ''; });
        this._siblings.forEach(function (sibling) { return sibling._stopReceiving(_this); });
        this._activeDraggables = [];
        this._itemPositions = [];
        this._previousSwap.drag = null;
        this._previousSwap.delta = 0;
    };
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @param currentIndex Index of the item currently being dragged.
     * @param siblings All of the items in the list.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getSiblingOffsetPx = /**
     * Gets the offset in pixels by which the items that aren't being dragged should be moved.
     * @private
     * @param {?} currentIndex Index of the item currently being dragged.
     * @param {?} siblings All of the items in the list.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentIndex, siblings, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var currentPosition = siblings[currentIndex].clientRect;
        /** @type {?} */
        var immediateSibling = siblings[currentIndex + delta * -1];
        /** @type {?} */
        var siblingOffset = currentPosition[isHorizontal ? 'width' : 'height'] * delta;
        if (immediateSibling) {
            /** @type {?} */
            var start = isHorizontal ? 'left' : 'top';
            /** @type {?} */
            var end = isHorizontal ? 'right' : 'bottom';
            // Get the spacing between the start of the current item and the end of the one immediately
            // after it in the direction in which the user is dragging, or vice versa. We add it to the
            // offset in order to push the element to where it will be when it's inline and is influenced
            // by the `margin` of its siblings.
            if (delta === -1) {
                siblingOffset -= immediateSibling.clientRect[start] - currentPosition[end];
            }
            else {
                siblingOffset += currentPosition[start] - immediateSibling.clientRect[end];
            }
        }
        return siblingOffset;
    };
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @param pointerX Coordinates along the X axis.
     * @param pointerY Coordinates along the Y axis.
     */
    /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isPointerNearDropContainer = /**
     * Checks whether the pointer coordinates are close to the drop container.
     * @private
     * @param {?} pointerX Coordinates along the X axis.
     * @param {?} pointerY Coordinates along the Y axis.
     * @return {?}
     */
    function (pointerX, pointerY) {
        var _a = this._clientRect, top = _a.top, right = _a.right, bottom = _a.bottom, left = _a.left, width = _a.width, height = _a.height;
        /** @type {?} */
        var xThreshold = width * DROP_PROXIMITY_THRESHOLD;
        /** @type {?} */
        var yThreshold = height * DROP_PROXIMITY_THRESHOLD;
        return pointerY > top - yThreshold && pointerY < bottom + yThreshold &&
            pointerX > left - xThreshold && pointerX < right + xThreshold;
    };
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @param currentPosition Current position of the item.
     * @param newPosition Position of the item where the current item should be moved.
     * @param delta Direction in which the user is moving.
     */
    /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    DropListRef.prototype._getItemOffsetPx = /**
     * Gets the offset in pixels by which the item that is being dragged should be moved.
     * @private
     * @param {?} currentPosition Current position of the item.
     * @param {?} newPosition Position of the item where the current item should be moved.
     * @param {?} delta Direction in which the user is moving.
     * @return {?}
     */
    function (currentPosition, newPosition, delta) {
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        /** @type {?} */
        var itemOffset = isHorizontal ? newPosition.left - currentPosition.left :
            newPosition.top - currentPosition.top;
        // Account for differences in the item width/height.
        if (delta === -1) {
            itemOffset += isHorizontal ? newPosition.width - currentPosition.width :
                newPosition.height - currentPosition.height;
        }
        return itemOffset;
    };
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @param item Item that is being sorted.
     * @param pointerX Position of the user's pointer along the X axis.
     * @param pointerY Position of the user's pointer along the Y axis.
     * @param delta Direction in which the user is moving their pointer.
     */
    /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    DropListRef.prototype._getItemIndexFromPointerPosition = /**
     * Gets the index of an item in the drop container, based on the position of the user's pointer.
     * @private
     * @param {?} item Item that is being sorted.
     * @param {?} pointerX Position of the user's pointer along the X axis.
     * @param {?} pointerY Position of the user's pointer along the Y axis.
     * @param {?=} delta Direction in which the user is moving their pointer.
     * @return {?}
     */
    function (item, pointerX, pointerY, delta) {
        var _this = this;
        /** @type {?} */
        var isHorizontal = this._orientation === 'horizontal';
        return findIndex(this._itemPositions, function (_a, _, array) {
            var drag = _a.drag, clientRect = _a.clientRect;
            if (drag === item) {
                // If there's only one item left in the container, it must be
                // the dragged item itself so we use it as a reference.
                return array.length < 2;
            }
            if (delta) {
                /** @type {?} */
                var direction = isHorizontal ? delta.x : delta.y;
                // If the user is still hovering over the same item as last time, and they didn't change
                // the direction in which they're dragging, we don't consider it a direction swap.
                if (drag === _this._previousSwap.drag && direction === _this._previousSwap.delta) {
                    return false;
                }
            }
            return isHorizontal ?
                // Round these down since most browsers report client rects with
                // sub-pixel precision, whereas the pointer coordinates are rounded to pixels.
                pointerX >= Math.floor(clientRect.left) && pointerX <= Math.floor(clientRect.right) :
                pointerY >= Math.floor(clientRect.top) && pointerY <= Math.floor(clientRect.bottom);
        });
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return isInsideClientRect(this._clientRect, x, y);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        return this._siblings.find(function (sibling) { return sibling._canReceive(item, x, y); });
    };
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param item Item that is being dragged into the list.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    DropListRef.prototype._canReceive = /**
     * Checks whether the drop list can receive the passed-in item.
     * @param {?} item Item that is being dragged into the list.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        if (!this.enterPredicate(item, this) || !isInsideClientRect(this._clientRect, x, y)) {
            return false;
        }
        /** @type {?} */
        var elementFromPoint = this._document.elementFromPoint(x, y);
        // If there's no element at the pointer position, then
        // the client rect is probably scrolled out of the view.
        if (!elementFromPoint) {
            return false;
        }
        // The `ClientRect`, that we're using to find the container over which the user is
        // hovering, doesn't give us any information on whether the element has been scrolled
        // out of the view or whether it's overlapping with other containers. This means that
        // we could end up transferring the item into a container that's invisible or is positioned
        // below another one. We use the result from `elementFromPoint` to get the top-most element
        // at the pointer position and to find whether it's one of the intersecting drop containers.
        return elementFromPoint === this.element || this.element.contains(elementFromPoint);
    };
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param sibling Sibling in which dragging has started.
     */
    /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    DropListRef.prototype._startReceiving = /**
     * Called by one of the connected drop lists when a dragging sequence has started.
     * @param {?} sibling Sibling in which dragging has started.
     * @return {?}
     */
    function (sibling) {
        /** @type {?} */
        var activeSiblings = this._activeSiblings;
        if (!activeSiblings.has(sibling)) {
            activeSiblings.add(sibling);
            this._cacheOwnPosition();
        }
    };
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param sibling Sibling whose dragging has stopped.
     */
    /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    DropListRef.prototype._stopReceiving = /**
     * Called by a connected drop list when dragging has stopped.
     * @param {?} sibling Sibling whose dragging has stopped.
     * @return {?}
     */
    function (sibling) {
        this._activeSiblings.delete(sibling);
    };
    return DropListRef;
}());
/**
 * Updates the top/left positions of a `ClientRect`, as well as their bottom/right counterparts.
 * @param {?} clientRect `ClientRect` that should be updated.
 * @param {?} top Amount to add to the `top` position.
 * @param {?} left Amount to add to the `left` position.
 * @return {?}
 */
function adjustClientRect(clientRect, top, left) {
    clientRect.top += top;
    clientRect.bottom = clientRect.top + clientRect.height;
    clientRect.left += left;
    clientRect.right = clientRect.left + clientRect.width;
}
/**
 * Finds the index of an item that matches a predicate function. Used as an equivalent
 * of `Array.prototype.find` which isn't part of the standard Google typings.
 * @template T
 * @param {?} array Array in which to look for matches.
 * @param {?} predicate Function used to determine whether an item is a match.
 * @return {?}
 */
function findIndex(array, predicate) {
    for (var i = 0; i < array.length; i++) {
        if (predicate(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
/**
 * Checks whether some coordinates are within a `ClientRect`.
 * @param {?} clientRect ClientRect that is being checked.
 * @param {?} x Coordinates along the X axis.
 * @param {?} y Coordinates along the Y axis.
 * @return {?}
 */
function isInsideClientRect(clientRect, x, y) {
    var top = clientRect.top, bottom = clientRect.bottom, left = clientRect.left, right = clientRect.right;
    return y >= top && y <= bottom && x >= left && x <= right;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Event options that can be used to bind an active, capturing event.
 * @type {?}
 */
var activeCapturingEventOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
    passive: false,
    capture: true
});
/**
 * Service that keeps track of all the drag item and drop container
 * instances, and manages global event listeners on the `document`.
 * \@docs-private
 * @template I, C
 */
// Note: this class is generic, rather than referencing CdkDrag and CdkDropList directly, in order
// to avoid circular imports. If we were to reference them here, importing the registry into the
// classes that are registering themselves will introduce a circular import.
var DragDropRegistry = /** @class */ (function () {
    function DragDropRegistry(_ngZone, _document) {
        var _this = this;
        this._ngZone = _ngZone;
        /**
         * Registered drop container instances.
         */
        this._dropInstances = new Set();
        /**
         * Registered drag item instances.
         */
        this._dragInstances = new Set();
        /**
         * Drag item instances that are currently being dragged.
         */
        this._activeDragInstances = new Set();
        /**
         * Keeps track of the event listeners that we've bound to the `document`.
         */
        this._globalListeners = new Map();
        /**
         * Emits the `touchmove` or `mousemove` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerMove = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Emits the `touchend` or `mouseup` events that are dispatched
         * while the user is dragging a drag item instance.
         */
        this.pointerUp = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Event listener that will prevent the default browser action while the user is dragging.
         * @param event Event whose default action should be prevented.
         */
        this._preventDefaultWhileDragging = function (event) {
            if (_this._activeDragInstances.size) {
                event.preventDefault();
            }
        };
        this._document = _document;
    }
    /** Adds a drop container to the registry. */
    /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.registerDropContainer = /**
     * Adds a drop container to the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        if (!this._dropInstances.has(drop)) {
            if (this.getDropContainer(drop.id)) {
                throw Error("Drop instance with id \"" + drop.id + "\" has already been registered.");
            }
            this._dropInstances.add(drop);
        }
    };
    /** Adds a drag item instance to the registry. */
    /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.registerDragItem = /**
     * Adds a drag item instance to the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        var _this = this;
        this._dragInstances.add(drag);
        // The `touchmove` event gets bound once, ahead of time, because WebKit
        // won't preventDefault on a dynamically-added `touchmove` listener.
        // See https://bugs.webkit.org/show_bug.cgi?id=184250.
        if (this._dragInstances.size === 1) {
            this._ngZone.runOutsideAngular(function () {
                // The event handler has to be explicitly active,
                // because newer browsers make it passive by default.
                _this._document.addEventListener('touchmove', _this._preventDefaultWhileDragging, activeCapturingEventOptions);
            });
        }
    };
    /** Removes a drop container from the registry. */
    /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    DragDropRegistry.prototype.removeDropContainer = /**
     * Removes a drop container from the registry.
     * @param {?} drop
     * @return {?}
     */
    function (drop) {
        this._dropInstances.delete(drop);
    };
    /** Removes a drag item instance from the registry. */
    /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.removeDragItem = /**
     * Removes a drag item instance from the registry.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._dragInstances.delete(drag);
        this.stopDragging(drag);
        if (this._dragInstances.size === 0) {
            this._document.removeEventListener('touchmove', this._preventDefaultWhileDragging, activeCapturingEventOptions);
        }
    };
    /**
     * Starts the dragging sequence for a drag instance.
     * @param drag Drag instance which is being dragged.
     * @param event Event that initiated the dragging.
     */
    /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    DragDropRegistry.prototype.startDragging = /**
     * Starts the dragging sequence for a drag instance.
     * @param {?} drag Drag instance which is being dragged.
     * @param {?} event Event that initiated the dragging.
     * @return {?}
     */
    function (drag, event) {
        var _this = this;
        this._activeDragInstances.add(drag);
        if (this._activeDragInstances.size === 1) {
            /** @type {?} */
            var isTouchEvent = event.type.startsWith('touch');
            /** @type {?} */
            var moveEvent = isTouchEvent ? 'touchmove' : 'mousemove';
            /** @type {?} */
            var upEvent = isTouchEvent ? 'touchend' : 'mouseup';
            // We explicitly bind __active__ listeners here, because newer browsers will default to
            // passive ones for `mousemove` and `touchmove`. The events need to be active, because we
            // use `preventDefault` to prevent the page from scrolling while the user is dragging.
            this._globalListeners
                .set(moveEvent, {
                handler: function (e) { return _this.pointerMove.next((/** @type {?} */ (e))); },
                options: activeCapturingEventOptions
            })
                .set(upEvent, {
                handler: function (e) { return _this.pointerUp.next((/** @type {?} */ (e))); },
                options: true
            })
                // Preventing the default action on `mousemove` isn't enough to disable text selection
                // on Safari so we need to prevent the selection event as well. Alternatively this can
                // be done by setting `user-select: none` on the `body`, however it has causes a style
                // recalculation which can be expensive on pages with a lot of elements.
                .set('selectstart', {
                handler: this._preventDefaultWhileDragging,
                options: activeCapturingEventOptions
            });
            // TODO(crisbeto): prevent mouse wheel scrolling while
            // dragging until we've set up proper scroll handling.
            if (!isTouchEvent) {
                this._globalListeners.set('wheel', {
                    handler: this._preventDefaultWhileDragging,
                    options: activeCapturingEventOptions
                });
            }
            this._ngZone.runOutsideAngular(function () {
                _this._globalListeners.forEach(function (config, name) {
                    _this._document.addEventListener(name, config.handler, config.options);
                });
            });
        }
    };
    /** Stops dragging a drag item instance. */
    /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.stopDragging = /**
     * Stops dragging a drag item instance.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        this._activeDragInstances.delete(drag);
        if (this._activeDragInstances.size === 0) {
            this._clearGlobalListeners();
        }
    };
    /** Gets whether a drag item instance is currently being dragged. */
    /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    DragDropRegistry.prototype.isDragging = /**
     * Gets whether a drag item instance is currently being dragged.
     * @param {?} drag
     * @return {?}
     */
    function (drag) {
        return this._activeDragInstances.has(drag);
    };
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * @breaking-change 8.0.0
     */
    /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    DragDropRegistry.prototype.getDropContainer = /**
     * Gets a drop container by its id.
     * @deprecated No longer being used. To be removed.
     * \@breaking-change 8.0.0
     * @param {?} id
     * @return {?}
     */
    function (id) {
        return Array.from(this._dropInstances).find(function (instance) { return instance.id === id; });
    };
    /**
     * @return {?}
     */
    DragDropRegistry.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._dragInstances.forEach(function (instance) { return _this.removeDragItem(instance); });
        this._dropInstances.forEach(function (instance) { return _this.removeDropContainer(instance); });
        this._clearGlobalListeners();
        this.pointerMove.complete();
        this.pointerUp.complete();
    };
    /** Clears out the global event listeners from the `document`. */
    /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    DragDropRegistry.prototype._clearGlobalListeners = /**
     * Clears out the global event listeners from the `document`.
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this._globalListeners.forEach(function (config, name) {
            _this._document.removeEventListener(name, config.handler, config.options);
        });
        this._globalListeners.clear();
    };
    DragDropRegistry.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDropRegistry.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
    ]; };
    /** @nocollapse */ DragDropRegistry.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DragDropRegistry_Factory() { return new DragDropRegistry(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])); }, token: DragDropRegistry, providedIn: "root" });
    return DragDropRegistry;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Default configuration to be used when creating a `DragRef`.
 * @type {?}
 */
var DEFAULT_CONFIG = {
    dragStartThreshold: 5,
    pointerDirectionChangeThreshold: 5
};
/**
 * Service that allows for drag-and-drop functionality to be attached to DOM elements.
 */
var DragDrop = /** @class */ (function () {
    function DragDrop(_document, _ngZone, _viewportRuler, _dragDropRegistry) {
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewportRuler = _viewportRuler;
        this._dragDropRegistry = _dragDropRegistry;
    }
    /**
     * Turns an element into a draggable item.
     * @param element Element to which to attach the dragging functionality.
     * @param config Object used to configure the dragging behavior.
     */
    /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    DragDrop.prototype.createDrag = /**
     * Turns an element into a draggable item.
     * @template T
     * @param {?} element Element to which to attach the dragging functionality.
     * @param {?=} config Object used to configure the dragging behavior.
     * @return {?}
     */
    function (element, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        return new DragRef(element, config, this._document, this._ngZone, this._viewportRuler, this._dragDropRegistry);
    };
    /**
     * Turns an element into a drop list.
     * @param element Element to which to attach the drop list functionality.
     */
    /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    DragDrop.prototype.createDropList = /**
     * Turns an element into a drop list.
     * @template T
     * @param {?} element Element to which to attach the drop list functionality.
     * @return {?}
     */
    function (element) {
        return new DropListRef(element, this._dragDropRegistry, this._document);
    };
    DragDrop.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"], args: [{ providedIn: 'root' },] },
    ];
    /** @nocollapse */
    DragDrop.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] },
        { type: DragDropRegistry }
    ]; };
    /** @nocollapse */ DragDrop.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["defineInjectable"])({ factory: function DragDrop_Factory() { return new DragDrop(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["inject"])(DragDropRegistry)); }, token: DragDrop, providedIn: "root" });
    return DragDrop;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @type {?}
 */
var CDK_DROP_LIST = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DROP_LIST');
/**
 * Injection token that is used to provide a CdkDropList instance to CdkDrag.
 * Used for avoiding circular imports.
 * @deprecated Use `CDK_DROP_LIST` instead.
 * \@breaking-change 8.0.0
 * @type {?}
 */
var CDK_DROP_LIST_CONTAINER = CDK_DROP_LIST;

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used for a `CdkDrag` to provide itself as a parent to the
 * drag-specific child directive (`CdkDragHandle`, `CdkDragPreview` etc.). Used primarily
 * to avoid circular imports.
 * \@docs-private
 * @type {?}
 */
var CDK_DRAG_PARENT = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DRAG_PARENT');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Handle that can be used to drag and CdkDrag instance.
 */
var CdkDragHandle = /** @class */ (function () {
    function CdkDragHandle(element, parentDrag) {
        this.element = element;
        /**
         * Emits when the state of the handle has changed.
         */
        this._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        this._parentDrag = parentDrag;
        toggleNativeDragInteractions(element.nativeElement, false);
    }
    Object.defineProperty(CdkDragHandle.prototype, "disabled", {
        /** Whether starting to drag through this handle is disabled. */
        get: /**
         * Whether starting to drag through this handle is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._stateChanges.next(this);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDragHandle.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._stateChanges.complete();
    };
    CdkDragHandle.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDragHandle]',
                    host: {
                        'class': 'cdk-drag-handle'
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDragHandle.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DRAG_PARENT,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] }
    ]; };
    CdkDragHandle.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragHandleDisabled',] }]
    };
    return CdkDragHandle;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the placeholder of a CdkDrag when
 * it is being dragged. The placeholder is displayed in place of the element being dragged.
 * @template T
 */
var CdkDragPlaceholder = /** @class */ (function () {
    function CdkDragPlaceholder(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPlaceholder.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPlaceholder]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPlaceholder.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    CdkDragPlaceholder.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CdkDragPlaceholder;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Element that will be used as a template for the preview
 * of a CdkDrag when it is being dragged.
 * @template T
 */
var CdkDragPreview = /** @class */ (function () {
    function CdkDragPreview(templateRef) {
        this.templateRef = templateRef;
    }
    CdkDragPreview.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: 'ng-template[cdkDragPreview]'
                },] },
    ];
    /** @nocollapse */
    CdkDragPreview.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"] }
    ]; };
    CdkDragPreview.propDecorators = {
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
    };
    return CdkDragPreview;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Injection token that can be used to configure the behavior of `CdkDrag`.
 * @type {?}
 */
var CDK_DRAG_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('CDK_DRAG_CONFIG', {
    providedIn: 'root',
    factory: CDK_DRAG_CONFIG_FACTORY
});
/**
 * \@docs-private
 * @return {?}
 */
function CDK_DRAG_CONFIG_FACTORY() {
    return { dragStartThreshold: 5, pointerDirectionChangeThreshold: 5 };
}
/**
 * Element that can be moved inside a CdkDropList container.
 * @template T
 */
var CdkDrag = /** @class */ (function () {
    function CdkDrag(element, dropContainer, _document, _ngZone, _viewContainerRef, viewportRuler, dragDropRegistry, config, _dir, 
    /**
     * @deprecated `viewportRuler`, `dragDropRegistry` and `_changeDetectorRef` parameters
     * to be removed. Also `dragDrop` parameter to be made required.
     * @breaking-change 8.0.0.
     */
    dragDrop, _changeDetectorRef) {
        var _this = this;
        this.element = element;
        this.dropContainer = dropContainer;
        this._document = _document;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._changeDetectorRef = _changeDetectorRef;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this._disabled = false;
        /**
         * Emits when the user starts dragging the item.
         */
        this.started = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has released a drag item, before any animations have started.
         */
        this.released = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user stops dragging an item in the container.
         */
        this.ended = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has moved the item into a new container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user removes the item its container by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user drops the item inside a container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits as the user is dragging the item. Use with caution,
         * because this event will fire for every pixel that the user has dragged.
         */
        this.moved = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            /** @type {?} */
            var subscription = _this._dragRef.moved.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (movedEvent) { return ({
                source: _this,
                pointerPosition: movedEvent.pointerPosition,
                event: movedEvent.event,
                delta: movedEvent.delta
            }); })).subscribe(observer);
            return function () {
                subscription.unsubscribe();
            };
        });
        // @breaking-change 8.0.0 Remove null check once the paramter is made required.
        if (dragDrop) {
            this._dragRef = dragDrop.createDrag(element, config);
        }
        else {
            this._dragRef = new DragRef(element, config, _document, _ngZone, viewportRuler, dragDropRegistry);
        }
        this._dragRef.data = this;
        this._syncInputs(this._dragRef);
        this._handleEvents(this._dragRef);
    }
    Object.defineProperty(CdkDrag.prototype, "disabled", {
        /** Whether starting to drag this element is disabled. */
        get: /**
         * Whether starting to drag this element is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (this.dropContainer && this.dropContainer.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
            this._dragRef.disabled = this._disabled;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     */
    /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    CdkDrag.prototype.getPlaceholderElement = /**
     * Returns the element that is being used as a placeholder
     * while the current element is being dragged.
     * @return {?}
     */
    function () {
        return this._dragRef.getPlaceholderElement();
    };
    /** Returns the root draggable element. */
    /**
     * Returns the root draggable element.
     * @return {?}
     */
    CdkDrag.prototype.getRootElement = /**
     * Returns the root draggable element.
     * @return {?}
     */
    function () {
        return this._dragRef.getRootElement();
    };
    /** Resets a standalone drag item to its initial position. */
    /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    CdkDrag.prototype.reset = /**
     * Resets a standalone drag item to its initial position.
     * @return {?}
     */
    function () {
        this._dragRef.reset();
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // We need to wait for the zone to stabilize, in order for the reference
        // element to be in the proper place in the DOM. This is mostly relevant
        // for draggable elements inside portals since they get stamped out in
        // their original DOM position and then they get transferred to the portal.
        this._ngZone.onStable.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(function () {
            _this._updateRootElement();
            // Listen for any newly-added handles.
            _this._handles.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(_this._handles), 
            // Sync the new handles with the DragRef.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["tap"])(function (handles) {
                /** @type {?} */
                var childHandleElements = handles
                    .filter(function (handle) { return handle._parentDrag === _this; })
                    .map(function (handle) { return handle.element; });
                _this._dragRef.withHandles(childHandleElements);
            }), 
            // Listen if the state of any of the handles changes.
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (handles) {
                return rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"].apply(void 0, handles.map(function (item) { return item._stateChanges; }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this._destroyed)).subscribe(function (handleInstance) {
                // Enabled/disable the handle that changed in the DragRef.
                /** @type {?} */
                var dragRef = _this._dragRef;
                /** @type {?} */
                var handle = handleInstance.element.nativeElement;
                handleInstance.disabled ? dragRef.disableHandle(handle) : dragRef.enableHandle(handle);
            });
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    CdkDrag.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        /** @type {?} */
        var rootSelectorChange = changes['rootElementSelector'];
        // We don't have to react to the first change since it's being
        // handled in `ngAfterViewInit` where it needs to be deferred.
        if (rootSelectorChange && !rootSelectorChange.firstChange) {
            this._updateRootElement();
        }
    };
    /**
     * @return {?}
     */
    CdkDrag.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._destroyed.next();
        this._destroyed.complete();
        this._dragRef.dispose();
    };
    /** Syncs the root element with the `DragRef`. */
    /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._updateRootElement = /**
     * Syncs the root element with the `DragRef`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.element.nativeElement;
        /** @type {?} */
        var rootElement = this.rootElementSelector ?
            getClosestMatchingAncestor(element, this.rootElementSelector) : element;
        if (rootElement && rootElement.nodeType !== this._document.ELEMENT_NODE) {
            throw Error("cdkDrag must be attached to an element node. " +
                ("Currently attached to \"" + rootElement.nodeName + "\"."));
        }
        this._dragRef.withRootElement(rootElement || element);
    };
    /** Gets the boundary element, based on the `boundaryElementSelector`. */
    /**
     * Gets the boundary element, based on the `boundaryElementSelector`.
     * @private
     * @return {?}
     */
    CdkDrag.prototype._getBoundaryElement = /**
     * Gets the boundary element, based on the `boundaryElementSelector`.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selector = this.boundaryElementSelector;
        return selector ? getClosestMatchingAncestor(this.element.nativeElement, selector) : null;
    };
    /** Syncs the inputs of the CdkDrag with the options of the underlying DragRef. */
    /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDrag with the options of the underlying DragRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            if (!ref.isDragging()) {
                /** @type {?} */
                var dir = _this._dir;
                /** @type {?} */
                var placeholder = _this._placeholderTemplate ? {
                    template: _this._placeholderTemplate.templateRef,
                    context: _this._placeholderTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                /** @type {?} */
                var preview = _this._previewTemplate ? {
                    template: _this._previewTemplate.templateRef,
                    context: _this._previewTemplate.data,
                    viewContainer: _this._viewContainerRef
                } : null;
                ref.disabled = _this.disabled;
                ref.lockAxis = _this.lockAxis;
                ref
                    .withBoundaryElement(_this._getBoundaryElement())
                    .withPlaceholderTemplate(placeholder)
                    .withPreviewTemplate(preview);
                if (dir) {
                    ref.withDirection(dir.value);
                }
            }
        });
    };
    /** Handles the events from the underlying `DragRef`. */
    /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDrag.prototype._handleEvents = /**
     * Handles the events from the underlying `DragRef`.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.started.subscribe(function () {
            _this.started.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            if (_this._changeDetectorRef) {
                // @breaking-change 8.0.0 Remove null check for _changeDetectorRef
                _this._changeDetectorRef.markForCheck();
            }
        });
        ref.released.subscribe(function () {
            _this.released.emit({ source: _this });
        });
        ref.ended.subscribe(function () {
            _this.ended.emit({ source: _this });
            // Since all of these events run outside of change detection,
            // we need to ensure that everything is marked correctly.
            if (_this._changeDetectorRef) {
                // @breaking-change 8.0.0 Remove null check for _changeDetectorRef
                _this._changeDetectorRef.markForCheck();
            }
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: event.container.data,
                item: _this
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                isPointerOverContainer: event.isPointerOverContainer,
                item: _this
            });
        });
    };
    CdkDrag.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDrag]',
                    exportAs: 'cdkDrag',
                    host: {
                        'class': 'cdk-drag',
                        '[class.cdk-drag-disabled]': 'disabled',
                        '[class.cdk-drag-dragging]': '_dragRef.isDragging()',
                    },
                    providers: [{ provide: CDK_DRAG_PARENT, useExisting: CdkDrag }]
                },] },
    ];
    /** @nocollapse */
    CdkDrag.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DROP_LIST,] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"] },
        { type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ViewportRuler"] },
        { type: DragDropRegistry },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [CDK_DRAG_CONFIG,] }] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: DragDrop },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
    ]; };
    CdkDrag.propDecorators = {
        _handles: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [CdkDragHandle, { descendants: true },] }],
        _previewTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkDragPreview,] }],
        _placeholderTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: [CdkDragPlaceholder,] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragData',] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragLockAxis',] }],
        rootElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragRootElement',] }],
        boundaryElementSelector: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragBoundary',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDragDisabled',] }],
        started: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragStarted',] }],
        released: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragReleased',] }],
        ended: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragEnded',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragExited',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragDropped',] }],
        moved: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDragMoved',] }]
    };
    return CdkDrag;
}());
/**
 * Gets the closest ancestor of an element that matches a selector.
 * @param {?} element
 * @param {?} selector
 * @return {?}
 */
function getClosestMatchingAncestor(element, selector) {
    /** @type {?} */
    var currentElement = (/** @type {?} */ (element.parentElement));
    while (currentElement) {
        // IE doesn't support `matches` so we have to fall back to `msMatchesSelector`.
        if (currentElement.matches ? currentElement.matches(selector) :
            ((/** @type {?} */ (currentElement))).msMatchesSelector(selector)) {
            return currentElement;
        }
        currentElement = currentElement.parentElement;
    }
    return null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Declaratively connects sibling `cdkDropList` instances together. All of the `cdkDropList`
 * elements that are placed inside a `cdkDropListGroup` will be connected to each other
 * automatically. Can be used as an alternative to the `cdkDropListConnectedTo` input
 * from `cdkDropList`.
 * @template T
 */
var CdkDropListGroup = /** @class */ (function () {
    function CdkDropListGroup() {
        /**
         * Drop lists registered inside the group.
         */
        this._items = new Set();
        this._disabled = false;
    }
    Object.defineProperty(CdkDropListGroup.prototype, "disabled", {
        /** Whether starting a dragging sequence from inside this group is disabled. */
        get: /**
         * Whether starting a dragging sequence from inside this group is disabled.
         * @return {?}
         */
        function () { return this._disabled; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropListGroup.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this._items.clear();
    };
    CdkDropListGroup.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDropListGroup]',
                    exportAs: 'cdkDropListGroup',
                },] },
    ];
    CdkDropListGroup.propDecorators = {
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListGroupDisabled',] }]
    };
    return CdkDropListGroup;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Counter used to generate unique ids for drop zones.
 * @type {?}
 */
var _uniqueIdCounter$1 = 0;
var ɵ0 = undefined;
// @breaking-change 8.0.0 `CdkDropList` implements `CdkDropListContainer` for backwards
// compatiblity. The implements clause, as well as all the methods that it enforces can
// be removed when `CdkDropListContainer` is deleted.
/**
 * Container that wraps a set of draggable items.
 * @template T
 */
var CdkDropList = /** @class */ (function () {
    function CdkDropList(element, dragDropRegistry, _changeDetectorRef, _dir, _group, _document, 
    /**
     * @deprecated `dragDropRegistry` and `_document` parameters to be removed.
     * Also `dragDrop` parameter to be made required.
     * @breaking-change 8.0.0.
     */
    dragDrop) {
        var _this = this;
        this.element = element;
        this._changeDetectorRef = _changeDetectorRef;
        this._dir = _dir;
        this._group = _group;
        /**
         * Emits when the list has been destroyed.
         */
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        /**
         * Other draggable containers that this container is connected to and into which the
         * container's items can be transferred. Can either be references to other drop containers,
         * or their unique IDs.
         */
        this.connectedTo = [];
        /**
         * Direction in which the list is oriented.
         */
        this.orientation = 'vertical';
        /**
         * Unique ID for the drop zone. Can be used as a reference
         * in the `connectedTo` of another `CdkDropList`.
         */
        this.id = "cdk-drop-list-" + _uniqueIdCounter$1++;
        this._disabled = false;
        /**
         * Function that is used to determine whether an item
         * is allowed to be moved into a drop container.
         */
        this.enterPredicate = function () { return true; };
        /**
         * Emits when the user drops an item inside the container.
         */
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user has moved a new drag item into this container.
         */
        this.entered = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits when the user removes an item from the container
         * by dragging it into another container.
         */
        this.exited = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Emits as the user is swapping items while actively dragging.
         */
        this.sorted = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // @breaking-change 8.0.0 Remove null check once `dragDrop` parameter is made required.
        if (dragDrop) {
            this._dropListRef = dragDrop.createDropList(element);
        }
        else {
            this._dropListRef = new DropListRef(element, dragDropRegistry, _document || document);
        }
        this._dropListRef.data = this;
        this._dropListRef.enterPredicate = function (drag, drop) {
            return _this.enterPredicate(drag.data, drop.data);
        };
        this._syncInputs(this._dropListRef);
        this._handleEvents(this._dropListRef);
        CdkDropList._dropLists.push(this);
        if (_group) {
            _group._items.add(this);
        }
    }
    Object.defineProperty(CdkDropList.prototype, "disabled", {
        /** Whether starting a dragging sequence from this container is disabled. */
        get: /**
         * Whether starting a dragging sequence from this container is disabled.
         * @return {?}
         */
        function () {
            return this._disabled || (!!this._group && this._group.disabled);
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this._draggables.changes
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._draggables), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
            .subscribe(function (items) {
            _this._dropListRef.withItems(items.map(function (drag) { return drag._dragRef; }));
        });
    };
    /**
     * @return {?}
     */
    CdkDropList.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = CdkDropList._dropLists.indexOf(this);
        if (index > -1) {
            CdkDropList._dropLists.splice(index, 1);
        }
        if (this._group) {
            this._group._items.delete(this);
        }
        this._dropListRef.dispose();
        this._destroyed.next();
        this._destroyed.complete();
    };
    /** Starts dragging an item. */
    /**
     * Starts dragging an item.
     * @return {?}
     */
    CdkDropList.prototype.start = /**
     * Starts dragging an item.
     * @return {?}
     */
    function () {
        this._dropListRef.start();
    };
    /**
     * Drops an item into this container.
     * @param item Item being dropped into the container.
     * @param currentIndex Index at which the item should be inserted.
     * @param previousContainer Container from which the item got dragged in.
     * @param isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     */
    /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    CdkDropList.prototype.drop = /**
     * Drops an item into this container.
     * @param {?} item Item being dropped into the container.
     * @param {?} currentIndex Index at which the item should be inserted.
     * @param {?} previousContainer Container from which the item got dragged in.
     * @param {?} isPointerOverContainer Whether the user's pointer was over the
     *    container when the item was dropped.
     * @return {?}
     */
    function (item, currentIndex, previousContainer, isPointerOverContainer) {
        this._dropListRef.drop(item._dragRef, currentIndex, ((/** @type {?} */ (previousContainer)))._dropListRef, isPointerOverContainer);
    };
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param item Item that was moved into the container.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     */
    /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype.enter = /**
     * Emits an event to indicate that the user moved an item into the container.
     * @param {?} item Item that was moved into the container.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @return {?}
     */
    function (item, pointerX, pointerY) {
        this._dropListRef.enter(item._dragRef, pointerX, pointerY);
    };
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param item Item that was dragged out.
     */
    /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    CdkDropList.prototype.exit = /**
     * Removes an item from the container after it was dragged into another container by the user.
     * @param {?} item Item that was dragged out.
     * @return {?}
     */
    function (item) {
        this._dropListRef.exit(item._dragRef);
    };
    /**
     * Figures out the index of an item in the container.
     * @param item Item whose index should be determined.
     */
    /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    CdkDropList.prototype.getItemIndex = /**
     * Figures out the index of an item in the container.
     * @param {?} item Item whose index should be determined.
     * @return {?}
     */
    function (item) {
        return this._dropListRef.getItemIndex(item._dragRef);
    };
    /**
     * Sorts an item inside the container based on its position.
     * @param item Item to be sorted.
     * @param pointerX Position of the item along the X axis.
     * @param pointerY Position of the item along the Y axis.
     * @param pointerDelta Direction in which the pointer is moving along each axis.
     */
    /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    CdkDropList.prototype._sortItem = /**
     * Sorts an item inside the container based on its position.
     * @param {?} item Item to be sorted.
     * @param {?} pointerX Position of the item along the X axis.
     * @param {?} pointerY Position of the item along the Y axis.
     * @param {?} pointerDelta Direction in which the pointer is moving along each axis.
     * @return {?}
     */
    function (item, pointerX, pointerY, pointerDelta) {
        return this._dropListRef._sortItem(item._dragRef, pointerX, pointerY, pointerDelta);
    };
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param item Drag item that is being moved.
     * @param x Position of the item along the X axis.
     * @param y Position of the item along the Y axis.
     */
    /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._getSiblingContainerFromPosition = /**
     * Figures out whether an item should be moved into a sibling
     * drop container, based on its current position.
     * @param {?} item Drag item that is being moved.
     * @param {?} x Position of the item along the X axis.
     * @param {?} y Position of the item along the Y axis.
     * @return {?}
     */
    function (item, x, y) {
        /** @type {?} */
        var result = this._dropListRef._getSiblingContainerFromPosition(item._dragRef, x, y);
        return result ? result.data : null;
    };
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param x Pointer position along the X axis.
     * @param y Pointer position along the Y axis.
     */
    /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    CdkDropList.prototype._isOverContainer = /**
     * Checks whether the user's pointer is positioned over the container.
     * @param {?} x Pointer position along the X axis.
     * @param {?} y Pointer position along the Y axis.
     * @return {?}
     */
    function (x, y) {
        return this._dropListRef._isOverContainer(x, y);
    };
    /** Syncs the inputs of the CdkDropList with the options of the underlying DropListRef. */
    /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._syncInputs = /**
     * Syncs the inputs of the CdkDropList with the options of the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        if (this._dir) {
            this._dir.change
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(this._dir.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed))
                .subscribe(function (value) { return ref.withDirection(value); });
        }
        ref.beforeStarted.subscribe(function () {
            /** @type {?} */
            var siblings = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceArray"])(_this.connectedTo).map(function (drop) {
                return typeof drop === 'string' ?
                    (/** @type {?} */ (CdkDropList._dropLists.find(function (list) { return list.id === drop; }))) : drop;
            });
            if (_this._group) {
                _this._group._items.forEach(function (drop) {
                    if (siblings.indexOf(drop) === -1) {
                        siblings.push(drop);
                    }
                });
            }
            ref.lockAxis = _this.lockAxis;
            ref
                .connectedTo(siblings.filter(function (drop) { return drop && drop !== _this; }).map(function (list) { return list._dropListRef; }))
                .withOrientation(_this.orientation);
        });
    };
    /** Handles events from the underlying DropListRef. */
    /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    CdkDropList.prototype._handleEvents = /**
     * Handles events from the underlying DropListRef.
     * @private
     * @param {?} ref
     * @return {?}
     */
    function (ref) {
        var _this = this;
        ref.beforeStarted.subscribe(function () {
            _this._changeDetectorRef.markForCheck();
        });
        ref.entered.subscribe(function (event) {
            _this.entered.emit({
                container: _this,
                item: event.item.data
            });
        });
        ref.exited.subscribe(function (event) {
            _this.exited.emit({
                container: _this,
                item: event.item.data
            });
        });
        ref.sorted.subscribe(function (event) {
            _this.sorted.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                container: _this,
                item: event.item.data
            });
        });
        ref.dropped.subscribe(function (event) {
            _this.dropped.emit({
                previousIndex: event.previousIndex,
                currentIndex: event.currentIndex,
                previousContainer: event.previousContainer.data,
                container: event.container.data,
                item: event.item.data,
                isPointerOverContainer: event.isPointerOverContainer
            });
            // Mark for check since all of these events run outside of change
            // detection and we're not guaranteed for something else to have triggered it.
            _this._changeDetectorRef.markForCheck();
        });
    };
    /**
     * Keeps track of the drop lists that are currently on the page.
     */
    CdkDropList._dropLists = [];
    CdkDropList.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"], args: [{
                    selector: '[cdkDropList], cdk-drop-list',
                    exportAs: 'cdkDropList',
                    providers: [
                        // Prevent child drop lists from picking up the same group as their parent.
                        { provide: CdkDropListGroup, useValue: ɵ0 },
                        { provide: CDK_DROP_LIST_CONTAINER, useExisting: CdkDropList },
                    ],
                    host: {
                        'class': 'cdk-drop-list',
                        '[id]': 'id',
                        '[class.cdk-drop-list-disabled]': 'disabled',
                        '[class.cdk-drop-list-dragging]': '_dropListRef.isDragging()',
                        '[class.cdk-drop-list-receiving]': '_dropListRef.isReceiving()',
                    }
                },] },
    ];
    /** @nocollapse */
    CdkDropList.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
        { type: DragDropRegistry },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
        { type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_6__["Directionality"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }] },
        { type: CdkDropListGroup, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"] }] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: DragDrop }
    ]; };
    CdkDropList.propDecorators = {
        _draggables: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(function () { return CdkDrag; }), {
                        // Explicitly set to false since some of the logic below makes assumptions about it.
                        // The `.withItems` call below should be updated if we ever need to switch this to `true`.
                        descendants: false
                    },] }],
        connectedTo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListConnectedTo',] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListData',] }],
        orientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListOrientation',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
        lockAxis: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListLockAxis',] }],
        disabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListDisabled',] }],
        enterPredicate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"], args: ['cdkDropListEnterPredicate',] }],
        dropped: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListDropped',] }],
        entered: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListEntered',] }],
        exited: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListExited',] }],
        sorted: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"], args: ['cdkDropListSorted',] }]
    };
    return CdkDropList;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DragDropModule = /** @class */ (function () {
    function DragDropModule() {
    }
    DragDropModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"], args: [{
                    declarations: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    exports: [
                        CdkDropList,
                        CdkDropListGroup,
                        CdkDrag,
                        CdkDragHandle,
                        CdkDragPreview,
                        CdkDragPlaceholder,
                    ],
                    providers: [
                        DragDrop,
                    ]
                },] },
    ];
    return DragDropModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=drag-drop.es5.js.map


/***/ }),

/***/ "./src/app/basket-module/animations/basket-list.animation.ts":
/*!*******************************************************************!*\
  !*** ./src/app/basket-module/animations/basket-list.animation.ts ***!
  \*******************************************************************/
/*! exports provided: BasketListAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketListAnimation", function() { return BasketListAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var BasketListAnimation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('list', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])('@items', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(80, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animateChild"])()), { optional: true })
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('items', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(0.5)', opacity: 0, height: 0, margin: 0 }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', opacity: 1, height: '*', margin: '*' }))
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.7, -0.6, 0.3, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    transform: 'scale(0.5)',
                    opacity: 0,
                    height: '0px',
                    margin: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s cubic-bezier(.7, 0, 0.3, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        width: '*',
                        flexBasis: '*',
                        offset: 0.7,
                    }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                        width: 0,
                        flexBasis: 0,
                        offset: 1,
                    }),
                ]))
            ]),
        ]),
    ]),
];


/***/ }),

/***/ "./src/app/basket-module/animations/router-slide.animation.ts":
/*!********************************************************************!*\
  !*** ./src/app/basket-module/animations/router-slide.animation.ts ***!
  \********************************************************************/
/*! exports provided: routerSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerSlide", function() { return routerSlide; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var routerSlide = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Basket => Checkout, Checkout => Payment', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(.8, -0.5, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(.8, -0.5, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }))
            ])
        ]),
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('Checkout => Basket, Payment => Checkout', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            }),
        ]),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(.8, -0.5, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '100%' }))
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '-100%' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1.5s cubic-bezier(.8, -0.5, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ left: '0%' }))
            ])
        ]),
    ]),
]);


/***/ }),

/***/ "./src/app/basket-module/basket-routing.module.ts":
/*!********************************************************!*\
  !*** ./src/app/basket-module/basket-routing.module.ts ***!
  \********************************************************/
/*! exports provided: BasketRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketRoutingModule", function() { return BasketRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/basket/basket.component */ "./src/app/basket-module/components/basket/basket.component.ts");
/* harmony import */ var _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/checkout/shipping/checkout-shipping.component */ "./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.ts");
/* harmony import */ var _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/checkout/payment/checkout-payment.component */ "./src/app/basket-module/components/checkout/payment/checkout-payment.component.ts");
/* harmony import */ var _components_basket_root_basket_root_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/basket-root/basket-root.component */ "./src/app/basket-module/components/basket-root/basket-root.component.ts");
/* harmony import */ var _fa_module_guards_activate_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../fa-module/guards/activate.guard */ "./src/app/fa-module/guards/activate.guard.ts");








var routes = [
    { path: '', component: _components_basket_root_basket_root_component__WEBPACK_IMPORTED_MODULE_6__["BasketRootComponent"], canActivate: [_fa_module_guards_activate_guard__WEBPACK_IMPORTED_MODULE_7__["FaGuard"]], children: [
            { path: '', canActivateChild: [_fa_module_guards_activate_guard__WEBPACK_IMPORTED_MODULE_7__["FaGuard"]], children: [
                    { path: '', component: _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_3__["BasketComponent"], data: { animation: 'Basket' } },
                    { path: 'checkout', component: _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_4__["CheckoutShippingComponent"], data: { animation: 'Checkout' } },
                    { path: 'checkout/payment', component: _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutPaymentComponent"], data: { animation: 'Payment' } },
                ] },
        ] }
];
var BasketRoutingModule = /** @class */ (function () {
    function BasketRoutingModule() {
    }
    BasketRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], BasketRoutingModule);
    return BasketRoutingModule;
}());



/***/ }),

/***/ "./src/app/basket-module/basket.module.ts":
/*!************************************************!*\
  !*** ./src/app/basket-module/basket.module.ts ***!
  \************************************************/
/*! exports provided: BasketModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketModule", function() { return BasketModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_module_products_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../products-module/products.module */ "./src/app/products-module/products.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _basket_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./basket-routing.module */ "./src/app/basket-module/basket-routing.module.ts");
/* harmony import */ var _components_basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/basket-item/basket-item.component */ "./src/app/basket-module/components/basket-item/basket-item.component.ts");
/* harmony import */ var _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/basket/basket.component */ "./src/app/basket-module/components/basket/basket.component.ts");
/* harmony import */ var _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/order-summary/order-summary.component */ "./src/app/basket-module/components/order-summary/order-summary.component.ts");
/* harmony import */ var _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/checkout/shipping/checkout-shipping.component */ "./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.ts");
/* harmony import */ var _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/checkout/payment/checkout-payment.component */ "./src/app/basket-module/components/checkout/payment/checkout-payment.component.ts");
/* harmony import */ var _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared-module/shared.module */ "./src/app/shared-module/shared.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _animation_module_animation_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../animation-module/animation.module */ "./src/app/animation-module/animation.module.ts");
/* harmony import */ var _components_basket_root_basket_root_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/basket-root/basket-root.component */ "./src/app/basket-module/components/basket-root/basket-root.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
















var BasketModule = /** @class */ (function () {
    function BasketModule() {
    }
    BasketModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_basket_item_basket_item_component__WEBPACK_IMPORTED_MODULE_6__["BasketItemComponent"],
                _components_basket_basket_component__WEBPACK_IMPORTED_MODULE_7__["BasketComponent"],
                _components_order_summary_order_summary_component__WEBPACK_IMPORTED_MODULE_8__["OrderSummaryComponent"],
                _components_checkout_shipping_checkout_shipping_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutShippingComponent"],
                _components_checkout_payment_checkout_payment_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutPaymentComponent"],
                _components_basket_root_basket_root_component__WEBPACK_IMPORTED_MODULE_14__["BasketRootComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _basket_routing_module__WEBPACK_IMPORTED_MODULE_5__["BasketRoutingModule"],
                _products_module_products_module__WEBPACK_IMPORTED_MODULE_3__["ProductsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _shared_module_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatSelectModule"],
                _animation_module_animation_module__WEBPACK_IMPORTED_MODULE_13__["AnimationModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_15__["DragDropModule"],
            ]
        })
    ], BasketModule);
    return BasketModule;
}());



/***/ }),

/***/ "./src/app/basket-module/components/basket-item/basket-item.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/basket-module/components/basket-item/basket-item.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"flex-box\" [style.opacity]=\"quantity.value ? 'initial' : '0.5'\">\r\n\r\n  <!----- Poster ----->\r\n  <div class=\"poster-field\">\r\n    <img [src]=\"thisOrder.product.images[0]\" onerror=\"this.src = 'assets/emptycart.png'\">\r\n  </div>\r\n\r\n  <!----- Info ----->\r\n  <div class=\"info-field\">\r\n    <div class=\"item-name\" [title]=\"thisOrder.product.name\">{{thisOrder.product.name}}</div>\r\n    <div class=\"item-brand\" >\r\n      <span>from </span>\r\n      <a [routerLink]=\"['/','products','brands',thisOrder.product.brand]\">\r\n        {{thisOrder.product.brand}}\r\n      </a>\r\n    </div>\r\n    <div (click)=\"removeOrder.emit()\" class=\"remove-btn\"><u>Remove</u></div>\r\n  </div>\r\n\r\n  <!----- Price ----->\r\n  <div class=\"price-field\">\r\n    <div class=\"price-quantity\">\r\n      <div class=\"item-price\">{{thisOrder.product.price | currency}}</div>\r\n      <div class=\"item-quantity\">\r\n        <input \r\n        _naturalNumbers \r\n        min=\"0\"\r\n        type=\"number\"\r\n        [formControl]=\"quantity\"\r\n        />\r\n      </div>\r\n    </div>\r\n    <div class=\"item-total-price\">\r\n      <b>Total: </b> \r\n      <span>\r\n        {{(thisOrder.product.price * thisOrder.quantity) | currency}}\r\n      </span>\r\n    </div>  \r\n  </div> \r\n\r\n</div>"

/***/ }),

/***/ "./src/app/basket-module/components/basket-item/basket-item.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/basket-module/components/basket-item/basket-item.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-box {\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  padding: 4px;\n  border-radius: 5px;\n  background: #f8f8f8;\n  box-shadow: 1px 1px 5px #b8b8b8; }\n  .flex-box .poster-field {\n    order: 1;\n    display: flex;\n    margin-right: 10px; }\n  .flex-box .poster-field img {\n      border-radius: 5px;\n      height: 100px;\n      width: 100px; }\n  .flex-box .info-field {\n    order: 2;\n    display: flex;\n    flex-direction: column; }\n  .flex-box .info-field .item-name {\n      font-size: 14px;\n      font-weight: bold;\n      color: #446E8E; }\n  .flex-box .info-field .item-brand {\n      font-size: 12px; }\n  .flex-box .info-field .remove-btn {\n      margin-top: auto;\n      font-size: 12px;\n      color: #446E8E;\n      cursor: pointer; }\n  .flex-box .info-field .remove-btn:hover {\n        color: #db5353; }\n  .flex-box .price-field {\n    order: 3;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding: 5px;\n    margin-left: auto; }\n  .flex-box .price-field .price-quantity {\n      display: flex;\n      flex-direction: row;\n      justify-content: flex-end; }\n  .flex-box .price-field .price-quantity .item-price {\n        font-weight: bold;\n        font-size: 15px;\n        color: #2196f3; }\n  .flex-box .price-field .price-quantity .item-quantity {\n        margin-left: 10px; }\n  .flex-box .price-field .price-quantity .item-quantity input {\n          border: solid 1px #446E8E;\n          border-radius: 5px;\n          padding: 3px 5px;\n          outline: none;\n          width: 55px;\n          height: 25px;\n          color: #1c1e2e;\n          background: #fafafc; }\n  .flex-box .price-field .price-quantity .item-quantity input:focus {\n            background: #f4f4f5; }\n  .flex-box .price-field .item-total-price {\n      white-space: nowrap;\n      font-size: 12px;\n      color: gray; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2Jhc2tldC1pdGVtL0M6XFxVc2Vyc1xcRVpcXERlc2t0b3BcXEFjYSBTaG9wXFxzaG9wXFxzaG9wL3NyY1xcYXBwXFxiYXNrZXQtbW9kdWxlXFxjb21wb25lbnRzXFxiYXNrZXQtaXRlbVxcYmFza2V0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUE4QjtFQUM5QiwrQkFBMEMsRUFBQTtFQVA5QztJQVdRLFFBQVE7SUFDUixhQUFhO0lBQ2Isa0JBQWtCLEVBQUE7RUFiMUI7TUFlWSxrQkFBa0I7TUFDbEIsYUFBYTtNQUNiLFlBQVksRUFBQTtFQWpCeEI7SUFzQlEsUUFBUTtJQUNSLGFBQWE7SUFDYixzQkFBc0IsRUFBQTtFQXhCOUI7TUEyQlksZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixjQUFjLEVBQUE7RUE3QjFCO01BaUNZLGVBQ0osRUFBQTtFQWxDUjtNQXFDWSxnQkFBZ0I7TUFDaEIsZUFBZTtNQUNmLGNBQWM7TUFDZCxlQUFlLEVBQUE7RUF4QzNCO1FBMENnQixjQUFjLEVBQUE7RUExQzlCO0lBZ0RRLFFBQVE7SUFDUixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VBdER6QjtNQXlEWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLHlCQUF5QixFQUFBO0VBM0RyQztRQThEZ0IsaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixjQUFjLEVBQUE7RUFoRTlCO1FBb0VnQixpQkFBaUIsRUFBQTtFQXBFakM7VUF1RW9CLHlCQUF5QjtVQUN6QixrQkFBa0I7VUFDbEIsZ0JBQWdCO1VBQ2hCLGFBQWE7VUFDYixXQUFXO1VBQ1gsWUFBWTtVQUNaLGNBQXNCO1VBQ3RCLG1CQUFtQixFQUFBO0VBOUV2QztZQWdGd0IsbUJBQW1CLEVBQUE7RUFoRjNDO01Bc0ZZLG1CQUFtQjtNQUNuQixlQUFlO01BQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2Jhc2tldC1pdGVtL2Jhc2tldC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mbGV4LWJveHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNDgsIDI0OCwgMjQ4KTtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4IHJnYigxODQsIDE4NCwgMTg0KTtcclxuICAgIFxyXG5cclxuICAgIC5wb3N0ZXItZmllbGR7XHJcbiAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm8tZmllbGR7XHJcbiAgICAgICAgb3JkZXI6IDI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDZFOEU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaXRlbS1icmFuZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJlbW92ZS1idG57XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgY29sb3I6ICM0NDZFOEU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZGI1MzUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcmljZS1maWVsZHtcclxuICAgICAgICBvcmRlcjogMztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcblxyXG4gICAgICAgIC5wcmljZS1xdWFudGl0eXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuXHJcbiAgICAgICAgICAgIC5pdGVtLXByaWNlIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC5pdGVtLXF1YW50aXR5IHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IHNvbGlkIDFweCAjNDQ2RThFO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHggNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDU1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2IoMjgsIDMwLCA0Nik7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYztcclxuICAgICAgICAgICAgICAgICAgICAmOmZvY3Vze1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjRmNGY1OyAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pdGVtLXRvdGFsLXByaWNlIHtcclxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/basket-module/components/basket-item/basket-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/basket-module/components/basket-item/basket-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasketItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketItemComponent", function() { return BasketItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var BasketItemComponent = /** @class */ (function () {
    function BasketItemComponent() {
        this.removeOrder = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /* --- LC hooks --- */
    BasketItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quantity = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.thisOrder.quantity);
        this.quantity.valueChanges.subscribe(function (next) {
            _this.thisOrder.quantity = +next;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BasketItemComponent.prototype, "thisOrder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BasketItemComponent.prototype, "removeOrder", void 0);
    BasketItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basket-item',
            template: __webpack_require__(/*! ./basket-item.component.html */ "./src/app/basket-module/components/basket-item/basket-item.component.html"),
            styles: [__webpack_require__(/*! ./basket-item.component.scss */ "./src/app/basket-module/components/basket-item/basket-item.component.scss"), __webpack_require__(/*! ./basket-item.media.scss */ "./src/app/basket-module/components/basket-item/basket-item.media.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BasketItemComponent);
    return BasketItemComponent;
}());



/***/ }),

/***/ "./src/app/basket-module/components/basket-item/basket-item.media.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/basket-module/components/basket-item/basket-item.media.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1000px) {\n  .flex-box .price-field .price-quantity {\n    flex-direction: column;\n    align-items: center; }\n    .flex-box .price-field .price-quantity .item-quantity {\n      margin-left: unset; } }\n\n@media (max-width: 700px) {\n  .flex-box {\n    display: flex;\n    flex-flow: row wrap;\n    box-shadow: 0px 0px 5px #b8b8b8;\n    background: initial;\n    margin-right: 5px;\n    margin-left: 5px;\n    padding: 0; }\n    .flex-box .poster-field {\n      flex-basis: 100%;\n      padding: 5px 0;\n      order: 2; }\n      .flex-box .poster-field img {\n        height: 100%;\n        width: 100%; }\n    .flex-box .info-field {\n      padding: 3px 5px;\n      background: #2196f3;\n      position: relative;\n      justify-content: space-between;\n      order: 1;\n      flex-basis: 100%; }\n      .flex-box .info-field .item-name {\n        cursor: pointer;\n        height: 1.5em;\n        overflow: hidden;\n        color: white;\n        font-size: 12px; }\n      .flex-box .info-field .item-brand {\n        font-size: 11px;\n        color: white; }\n        .flex-box .info-field .item-brand a {\n          color: #d8d8d8; }\n      .flex-box .info-field .remove-btn {\n        transition: all 0.3s;\n        padding: 5px 8px;\n        color: white;\n        position: absolute;\n        top: 0;\n        right: 0;\n        box-shadow: inset 10px 10px 1px 1px #2196f3; }\n        .flex-box .info-field .remove-btn u {\n          display: none; }\n        .flex-box .info-field .remove-btn:hover {\n          color: red; }\n        .flex-box .info-field .remove-btn::after {\n          content: \"X\"; }\n    .flex-box .price-field {\n      flex-basis: 100%;\n      margin-left: unset;\n      order: 3;\n      padding: 5px;\n      flex-direction: row;\n      justify-content: space-between; }\n      .flex-box .price-field .price-quantity {\n        order: 2;\n        align-items: flex-end; }\n        .flex-box .price-field .price-quantity .item-price {\n          order: 2; }\n        .flex-box .price-field .price-quantity .item-quantity {\n          order: 1; }\n          .flex-box .price-field .price-quantity .item-quantity input {\n            width: 45px;\n            font-size: 11px; }\n      .flex-box .price-field .item-total-price {\n        order: 1;\n        white-space: normal; } }\n\n@media (max-width: 500px) {\n  .flex-box {\n    margin-right: 15px;\n    margin-left: 15px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2Jhc2tldC1pdGVtL0M6XFxVc2Vyc1xcRVpcXERlc2t0b3BcXEFjYSBTaG9wXFxzaG9wXFxzaG9wL3NyY1xcYXBwXFxiYXNrZXQtbW9kdWxlXFxjb21wb25lbnRzXFxiYXNrZXQtaXRlbVxcYmFza2V0LWl0ZW0ubWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBR1ksc0JBQXNCO0lBQ3RCLG1CQUFtQixFQUFBO0lBSi9CO01BTWdCLGtCQUFrQixFQUFBLEVBQ3JCOztBQU1qQjtFQUVJO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwrQkFBMEM7SUFDMUMsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsVUFBVSxFQUFBO0lBUGQ7TUFVUSxnQkFBZ0I7TUFDaEIsY0FBYztNQUNkLFFBQVEsRUFBQTtNQVpoQjtRQWNZLFlBQVk7UUFDWixXQUFXLEVBQUE7SUFmdkI7TUFtQlEsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsOEJBQThCO01BQzlCLFFBQVE7TUFDUixnQkFBZ0IsRUFBQTtNQXhCeEI7UUEwQlksZUFBZTtRQUNmLGFBQWE7UUFDYixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGVBQWUsRUFBQTtNQTlCM0I7UUFpQ1ksZUFBZTtRQUNmLFlBQVksRUFBQTtRQWxDeEI7VUFvQ2dCLGNBQWMsRUFBQTtNQXBDOUI7UUF3Q1ksb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixRQUFRO1FBQ1IsMkNBQTJDLEVBQUE7UUE5Q3ZEO1VBZ0RnQixhQUFhLEVBQUE7UUFoRDdCO1VBbURnQixVQUFVLEVBQUE7UUFuRDFCO1VBc0RnQixZQUFZLEVBQUE7SUF0RDVCO01BMkRRLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsUUFBUTtNQUNSLFlBQVk7TUFDWixtQkFBbUI7TUFDbkIsOEJBQThCLEVBQUE7TUFoRXRDO1FBa0VZLFFBQVE7UUFDUixxQkFBcUIsRUFBQTtRQW5FakM7VUFxRWdCLFFBQVEsRUFBQTtRQXJFeEI7VUF3RWdCLFFBQVEsRUFBQTtVQXhFeEI7WUEwRW9CLFdBQVc7WUFDWCxlQUFlLEVBQUE7TUEzRW5DO1FBZ0ZZLFFBQVE7UUFDUixtQkFBbUIsRUFBQSxFQUN0Qjs7QUFLYjtFQUNJO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2Jhc2tldC1pdGVtL2Jhc2tldC1pdGVtLm1lZGlhLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgIFxyXG4gICAgLmZsZXgtYm94e1xyXG4gICAgICAgIC5wcmljZS1maWVsZHtcclxuICAgICAgICAgICAgLnByaWNlLXF1YW50aXR5e1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAuaXRlbS1xdWFudGl0eSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgXHJcbiAgICAuZmxleC1ib3h7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IHJnYigxODQsIDE4NCwgMTg0KTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBpbml0aWFsO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgLnBvc3Rlci1maWVsZHtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5mby1maWVsZHtcclxuICAgICAgICAgICAgcGFkZGluZzogM3B4IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogIzIxOTZmMztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMS41ZW07XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pdGVtLWJyYW5kIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNkOGQ4ZDg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnJlbW92ZS1idG57XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDEwcHggMTBweCAxcHggMXB4ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgICAgICB1e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlhcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJpY2UtZmllbGR7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgICAgICAgICAgb3JkZXI6IDM7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAucHJpY2UtcXVhbnRpdHl7XHJcbiAgICAgICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIC5pdGVtLXByaWNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5pdGVtLXF1YW50aXR5IHtcclxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLml0ZW0tdG90YWwtcHJpY2Uge1xyXG4gICAgICAgICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpe1xyXG4gICAgLmZsZXgtYm94e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/basket-module/components/basket-root/basket-root.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/basket-module/components/basket-root/basket-root.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \r\nid=\"basket-root\"\r\nclass=\"yhidden\"\r\n[@routeAnimations]=\"prepareRoute(outlet)\"\r\n(@routeAnimations.start)=\"animating = true\"\r\n(@routeAnimations.done)=\"animating = false\"\r\n>\r\n    <router-outlet #outlet=\"outlet\"></router-outlet>\r\n    <div class=\"fake-filler\" *ngIf=\"animating\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/basket-module/components/basket-root/basket-root.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/basket-module/components/basket-root/basket-root.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fake-filler {\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2Jhc2tldC1yb290L0M6XFxVc2Vyc1xcRVpcXERlc2t0b3BcXEFjYSBTaG9wXFxzaG9wXFxzaG9wL3NyY1xcYXBwXFxiYXNrZXQtbW9kdWxlXFxjb21wb25lbnRzXFxiYXNrZXQtcm9vdFxcYmFza2V0LXJvb3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYXNrZXQtbW9kdWxlL2NvbXBvbmVudHMvYmFza2V0LXJvb3QvYmFza2V0LXJvb3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmFrZS1maWxsZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/basket-module/components/basket-root/basket-root.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/basket-module/components/basket-root/basket-root.component.ts ***!
  \*******************************************************************************/
/*! exports provided: BasketRootComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketRootComponent", function() { return BasketRootComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _animations_router_slide_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/router-slide.animation */ "./src/app/basket-module/animations/router-slide.animation.ts");




var BasketRootComponent = /** @class */ (function () {
    function BasketRootComponent(router) {
        this.router = router;
        this.animating = false;
    }
    BasketRootComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    BasketRootComponent.prototype.ngOnInit = function () { };
    BasketRootComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basket-root',
            template: __webpack_require__(/*! ./basket-root.component.html */ "./src/app/basket-module/components/basket-root/basket-root.component.html"),
            animations: [_animations_router_slide_animation__WEBPACK_IMPORTED_MODULE_3__["routerSlide"]],
            styles: [__webpack_require__(/*! ./basket-root.component.scss */ "./src/app/basket-module/components/basket-root/basket-root.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BasketRootComponent);
    return BasketRootComponent;
}());



/***/ }),

/***/ "./src/app/basket-module/components/basket/basket.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/basket-module/components/basket/basket.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"flex-box\">\r\n\r\n  <div class=\"top-panel\">\r\n\r\n    <!----- panel-static-info ----->\r\n    <div *ngIf=\"basketSize\" class=\"top-panel-intro\">\r\n      <anim-flow inline=\"true\" duration=\"1\" overflow=\"2\">\r\n        <span><u>{{basketSize}} Orders in Basket</u></span>\r\n      </anim-flow>\r\n      <anim-flow inline=\"true\" duration=\"1.2\" delay=\"400\" overflow=\"2\">\r\n        <img src=\"assets/basket.png\">\r\n      </anim-flow> \r\n    </div>\r\n\r\n    <!----- panel-actions ----->\r\n    <div class=\"top-panel-actions\">\r\n      <button title=\"Keep shopping\" (click)=\"back()\" class=\"action-btn keep-shopping\">\r\n        <span>Keep Shoping</span>\r\n        <img src=\"assets/keep-shopping.png\">\r\n      </button>\r\n      <button title=\"Clear basket\" (click)=\"clear()\" class=\"action-btn clear-basket\">\r\n        <span>Clear Basket</span>\r\n        <img src=\"assets/clear-basket.png\">\r\n      </button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <!-------- basket-content -------->\r\n  <div *ngIf=\"basketSize\" class=\"basket-content\">\r\n\r\n    <!----- order-list ----->\r\n    <div @list class=\"ordered-items-list\"> \r\n      <div \r\n      *ngFor=\"let order of basket, index as i\"\r\n      class=\"ordered-item\"\r\n      @items\r\n      >\r\n        <app-basket-item\r\n        (removeOrder)=\"remove(i)\"\r\n        [thisOrder]=\"order\"\r\n        ></app-basket-item>\r\n\r\n      </div>\r\n    </div>\r\n\r\n    \r\n\r\n    <!----- order-results ----->\r\n    <div class=\"order-summary\">\r\n      <app-order-summary action=\"CHECKOUT\"></app-order-summary>\r\n      <hr class=\"non-static\">\r\n    </div>\r\n    \r\n  </div>\r\n</div>\r\n\r\n\r\n<!----- below-basket ----->\r\n<div class=\"additional-fields\">\r\n  \r\n  <!----- (you may also like) products ----->\r\n  <div class=\"additional-products\" *ngIf=\"basketSize\">\r\n    <h4 class=\"title\">You May Also Like</h4>\r\n    <hr>\r\n    <app-product-list\r\n    [listRatio]=\"5\"\r\n    *ngIf=\"randomCollection\" \r\n    [productCollection]=\"randomCollection\"\r\n    ></app-product-list>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<!----- empty-basket-template ----->\r\n<img \r\n*ngIf=\"!basketSize\" \r\nid=\"empty-basket\" \r\nsrc=\"assets/emptyBasket.png\"\r\n>"

/***/ }),

/***/ "./src/app/basket-module/components/basket/basket.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/basket-module/components/basket/basket.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-box {\n  padding-left: 12%;\n  padding-right: 12%;\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n  .flex-box .top-panel {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    margin-top: 20px;\n    margin-bottom: 10px; }\n  .flex-box .top-panel .top-panel-intro {\n      font-size: 20px;\n      font-weight: bold;\n      font-variant: small-caps;\n      color: #446E8E; }\n  .flex-box .top-panel .top-panel-intro img {\n        height: 35px;\n        width: 35px; }\n  .flex-box .top-panel .top-panel-actions {\n      margin-left: auto; }\n  .flex-box .top-panel .top-panel-actions .action-btn {\n        border: none;\n        color: white;\n        font-size: 11px;\n        padding: 7px;\n        width: 150px;\n        outline: none;\n        transition: all 0.3s; }\n  .flex-box .top-panel .top-panel-actions img {\n        width: 15px;\n        height: 15px;\n        margin-left: 5px; }\n  .flex-box .top-panel .top-panel-actions .clear-basket {\n        border-top-right-radius: 10px;\n        border-bottom-right-radius: 10px;\n        background: #995858; }\n  .flex-box .top-panel .top-panel-actions .clear-basket:hover {\n          width: 170px;\n          background: #dd4141; }\n  .flex-box .top-panel .top-panel-actions .clear-basket:active {\n          background: #be6e6e; }\n  .flex-box .top-panel .top-panel-actions .keep-shopping {\n        background: #446E8E;\n        border-top-left-radius: 10px;\n        border-bottom-left-radius: 10px; }\n  .flex-box .top-panel .top-panel-actions .keep-shopping:hover {\n          width: 170px;\n          background: #2491e4; }\n  .flex-box .top-panel .top-panel-actions .keep-shopping:active {\n          background: #5e8eb3; }\n  .flex-box .basket-content {\n    display: flex;\n    flex-direction: row;\n    margin-top: 5px;\n    margin-bottom: 20px; }\n  .flex-box .basket-content .ordered-items-list {\n      order: 1;\n      display: flex;\n      flex-direction: column;\n      flex-grow: 1;\n      flex-basis: 550px;\n      margin-right: 15px;\n      align-content: unset; }\n  .flex-box .basket-content .ordered-items-list .ordered-item:not(:last-child) {\n        margin-bottom: 10px; }\n  .flex-box .basket-content .order-summary {\n      order: 2;\n      position: -webkit-sticky;\n      position: sticky;\n      top: 120px;\n      flex-basis: 300px;\n      margin-left: auto;\n      border-radius: 5px;\n      height: 100%;\n      min-width: 280px; }\n  .flex-box .basket-content .order-summary hr.non-static {\n        display: none; }\n  .additional-fields {\n  padding-left: 10%;\n  padding-right: 10%; }\n  .additional-fields .additional-products .title {\n    display: inline-block;\n    color: #3b3b79;\n    font-style: italic;\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n    margin-bottom: 2px;\n    margin-top: 50px; }\n  #empty-basket {\n  position: fixed;\n  bottom: 35px;\n  left: 15%;\n  height: 300px;\n  width: 300px; }\n  @media (max-width: 1000px) {\n  #empty-basket {\n    height: 250px;\n    width: 250px; } }\n  @media (max-width: 700px) {\n  #empty-basket {\n    height: 230px;\n    width: 230px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2Jhc2tldC9DOlxcVXNlcnNcXEVaXFxEZXNrdG9wXFxBY2EgU2hvcFxcc2hvcFxcc2hvcC9zcmNcXGFwcFxcYmFza2V0LW1vZHVsZVxcY29tcG9uZW50c1xcYmFza2V0XFxiYXNrZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7RUFMMUI7SUFRUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CLEVBQUE7RUFaM0I7TUFlWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHdCQUF3QjtNQUN4QixjQUFjLEVBQUE7RUFsQjFCO1FBcUJnQixZQUFZO1FBQ1osV0FBVyxFQUFBO0VBdEIzQjtNQTBCWSxpQkFBaUIsRUFBQTtFQTFCN0I7UUE2QmdCLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7UUFDWixZQUFZO1FBQ1osYUFBYTtRQUNiLG9CQUFvQixFQUFBO0VBbkNwQztRQXNDZ0IsV0FBVztRQUNYLFlBQVk7UUFDWixnQkFBZ0IsRUFBQTtFQXhDaEM7UUE0Q2dCLDZCQUE2QjtRQUM3QixnQ0FBZ0M7UUFDaEMsbUJBQTRCLEVBQUE7RUE5QzVDO1VBZ0RvQixZQUFZO1VBQ1osbUJBQTRCLEVBQUE7RUFqRGhEO1VBb0RvQixtQkFBOEIsRUFBQTtFQXBEbEQ7UUF5RGdCLG1CQUFtQjtRQUNuQiw0QkFBNEI7UUFDNUIsK0JBQStCLEVBQUE7RUEzRC9DO1VBNkRvQixZQUFZO1VBQ1osbUJBQTZCLEVBQUE7RUE5RGpEO1VBaUVvQixtQkFBNkIsRUFBQTtFQWpFakQ7SUF3RVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsbUJBQW1CLEVBQUE7RUEzRTNCO01BOEVZLFFBQVE7TUFDUixhQUFhO01BQ2Isc0JBQXNCO01BQ3RCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsa0JBQWtCO01BQ2xCLG9CQUFvQixFQUFBO0VBcEZoQztRQXVGb0IsbUJBQW1CLEVBQUE7RUF2RnZDO01BNEZZLFFBQVE7TUFDUix3QkFBZ0I7TUFBaEIsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLGtCQUFrQjtNQUNsQixZQUFZO01BQ1osZ0JBQWdCLEVBQUE7RUFuRzVCO1FBcUdnQixhQUFhLEVBQUE7RUFRN0I7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7RUFGdEI7SUFLWSxxQkFBcUI7SUFDckIsY0FBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLDZFQUE2RTtJQUM3RSxrQkFBa0I7SUFDbEIsZ0JBQWdCLEVBQUE7RUFNNUI7RUFDSSxlQUFlO0VBQ2YsWUFBWTtFQUNaLFNBQVM7RUFDVCxhQUFhO0VBQ2IsWUFBWSxFQUFBO0VBR2hCO0VBQ0k7SUFDSSxhQUFhO0lBQ2IsWUFDSixFQUFBLEVBQUM7RUFFTDtFQUNJO0lBQ0ksYUFBYTtJQUNiLFlBQVksRUFBQSxFQUNmIiwiZmlsZSI6InNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2Jhc2tldC9iYXNrZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1ib3h7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEyJTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEyJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgIC50b3AtcGFuZWx7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuICAgICAgICAudG9wLXBhbmVsLWludHJve1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNDQ2RThFO1xyXG5cclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvcC1wYW5lbC1hY3Rpb25ze1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuXHJcbiAgICAgICAgICAgIC5hY3Rpb24tYnRue1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmNsZWFyLWJhc2tldHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMTUzLCA4OCwgODgpO1xyXG4gICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIyMSwgNjUsIDY1KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigxOTAsIDExMCwgMTEwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmtlZXAtc2hvcHBpbmd7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDQ2RThFO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMzYsIDE0NSwgMjI4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWN0aXZle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYig5NCwgMTQyLCAxNzkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5iYXNrZXQtY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBcclxuICAgICAgICAub3JkZXJlZC1pdGVtcy1saXN0e1xyXG4gICAgICAgICAgICBvcmRlcjogMTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiA1NTBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBhbGlnbi1jb250ZW50OiB1bnNldDtcclxuICAgICAgICAgICAgLm9yZGVyZWQtaXRlbXtcclxuICAgICAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKXtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5vcmRlci1zdW1tYXJ5e1xyXG4gICAgICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgICAgICAgICAgdG9wOiAxMjBweDtcclxuICAgICAgICAgICAgZmxleC1iYXNpczogMzAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAyODBweDtcclxuICAgICAgICAgICAgaHIubm9uLXN0YXRpY3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLmFkZGl0aW9uYWwtZmllbGRze1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMCU7XHJcbiAgICAuYWRkaXRpb25hbC1wcm9kdWN0c3tcclxuICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgY29sb3I6IHJnYig1OSwgNTksIDEyMSk7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuI2VtcHR5LWJhc2tldHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMzVweDtcclxuICAgIGxlZnQ6IDE1JTtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgI2VtcHR5LWJhc2tldHtcclxuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNTBweFxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgICAjZW1wdHktYmFza2V0e1xyXG4gICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDIzMHB4O1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/basket-module/components/basket/basket.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/basket-module/components/basket/basket.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasketComponent", function() { return BasketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_basket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/basket.service */ "./src/app/basket-module/services/basket.service.ts");
/* harmony import */ var src_app_fa_module_services_open_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/fa-module/services/open-dialog.service */ "./src/app/fa-module/services/open-dialog.service.ts");
/* harmony import */ var _constants_popup_messages_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../constants/popup-messages.constant */ "./src/app/constants/popup-messages.constant.ts");
/* harmony import */ var src_app_products_module_services_product_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/products-module/services/product.service */ "./src/app/products-module/services/product.service.ts");
/* harmony import */ var _animations_basket_list_animation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations/basket-list.animation */ "./src/app/basket-module/animations/basket-list.animation.ts");








var BasketComponent = /** @class */ (function () {
    function BasketComponent(location, bs, dialog, ps) {
        this.location = location;
        this.bs = bs;
        this.dialog = dialog;
        this.ps = ps;
    }
    Object.defineProperty(BasketComponent.prototype, "basketSize", {
        /* --- Getters --- */
        get: function () {
            return this.bs.basket.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasketComponent.prototype, "basket", {
        get: function () {
            return this.bs.basket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasketComponent.prototype, "totalQuantuty", {
        get: function () {
            return this.bs.getTotalQuantity();
        },
        enumerable: true,
        configurable: true
    });
    /* --- Methods --- */
    BasketComponent.prototype.clear = function () {
        var _this = this;
        if (this.basketSize) {
            this.dialog.openConfirmMessage({
                message: Object(_constants_popup_messages_constant__WEBPACK_IMPORTED_MODULE_5__["clearBasket"])(this.basketSize),
                accept: function () { return _this.bs.clearBasket(); }
            });
        }
        else {
            this.dialog.openAlertMessage({
                message: ['Basket is empty'],
                after: null,
            });
        }
    };
    BasketComponent.prototype.removeAnimation = function (ind) {
    };
    BasketComponent.prototype.remove = function (ind) {
        var _this = this;
        var quantity = this.basket[ind].quantity;
        this.dialog.openConfirmMessage({
            message: Object(_constants_popup_messages_constant__WEBPACK_IMPORTED_MODULE_5__["removeBasketItem"])(quantity),
            accept: function () { return _this.bs.removeOrderFromBasket(ind); }
        });
    };
    BasketComponent.prototype.back = function () {
        this.location.back();
    };
    /* --- LC hooks --- */
    BasketComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.randomCollectionSubscription = this.ps.getRandomCollection().subscribe(function (res) { return _this.randomCollection = res; });
    };
    BasketComponent.prototype.ngOnDestroy = function () {
        this.bs.updateCredit();
        this.randomCollectionSubscription.unsubscribe();
    };
    BasketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basket',
            template: __webpack_require__(/*! ./basket.component.html */ "./src/app/basket-module/components/basket/basket.component.html"),
            animations: _animations_basket_list_animation__WEBPACK_IMPORTED_MODULE_7__["BasketListAnimation"],
            styles: [__webpack_require__(/*! ./basket.component.scss */ "./src/app/basket-module/components/basket/basket.component.scss"), __webpack_require__(/*! ./basket.media.scss */ "./src/app/basket-module/components/basket/basket.media.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"],
            _services_basket_service__WEBPACK_IMPORTED_MODULE_3__["BasketService"],
            src_app_fa_module_services_open_dialog_service__WEBPACK_IMPORTED_MODULE_4__["OpenDialogService"],
            src_app_products_module_services_product_service__WEBPACK_IMPORTED_MODULE_6__["ProductService"]])
    ], BasketComponent);
    return BasketComponent;
}());



/***/ }),

/***/ "./src/app/basket-module/components/basket/basket.media.scss":
/*!*******************************************************************!*\
  !*** ./src/app/basket-module/components/basket/basket.media.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1000px) {\n  .additional-fields {\n    padding-left: 5%;\n    padding-right: 5%; }\n  .flex-box {\n    padding-left: 5%;\n    padding-right: 5%; }\n    .flex-box .top-panel {\n      flex-grow: 1; }\n      .flex-box .top-panel .top-panel-intro {\n        font-size: 18px; }\n        .flex-box .top-panel .top-panel-intro img {\n          height: 30px;\n          width: 30px; }\n      .flex-box .top-panel .top-panel-actions .action-btn {\n        width: 125px; }\n        .flex-box .top-panel .top-panel-actions .action-btn:hover {\n          width: 150px; }\n    .flex-box .basket-content .order-summary {\n      flex-basis: 250px;\n      min-width: 220px;\n      top: 160px; } }\n\n@media (max-width: 700px) {\n  .flex-box {\n    display: block; }\n    .flex-box .top-panel {\n      margin-bottom: 20px; }\n      .flex-box .top-panel .top-panel-actions .action-btn {\n        width: 50px;\n        text-align: center; }\n        .flex-box .top-panel .top-panel-actions .action-btn span {\n          display: none; }\n        .flex-box .top-panel .top-panel-actions .action-btn:hover {\n          width: 70px; }\n    .flex-box .basket-content {\n      flex-direction: column; }\n      .flex-box .basket-content .ordered-items-list {\n        flex-flow: row wrap;\n        align-items: center;\n        order: 2;\n        margin-right: unset;\n        flex-basis: unset; }\n        .flex-box .basket-content .ordered-items-list .ordered-item {\n          flex-basis: calc(100% / 3); }\n          .flex-box .basket-content .ordered-items-list .ordered-item:last-child {\n            margin-bottom: 10px; }\n      .flex-box .basket-content .order-summary {\n        position: initial;\n        margin-left: unset;\n        margin-bottom: 10px;\n        flex-basis: 100%;\n        order: 1; }\n        .flex-box .basket-content .order-summary hr.non-static {\n          display: block; } }\n\n@media (max-width: 500px) {\n  .flex-box .basket-content .ordered-items-list .ordered-item {\n    flex-basis: 50%;\n    margin-bottom: 25px !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2Jhc2tldC9DOlxcVXNlcnNcXEVaXFxEZXNrdG9wXFxBY2EgU2hvcFxcc2hvcFxcc2hvcC9zcmNcXGFwcFxcYmFza2V0LW1vZHVsZVxcY29tcG9uZW50c1xcYmFza2V0XFxiYXNrZXQubWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQixFQUFBO0lBRnJCO01BSVEsWUFBWSxFQUFBO01BSnBCO1FBTVksZUFBZSxFQUFBO1FBTjNCO1VBUWdCLFlBQVk7VUFDWixXQUFXLEVBQUE7TUFUM0I7UUFjZ0IsWUFBWSxFQUFBO1FBZDVCO1VBZ0JvQixZQUFZLEVBQUE7SUFoQmhDO01BdUJZLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsVUFBVSxFQUFBLEVBQ2I7O0FBS2I7RUFDSTtJQUNJLGNBQWMsRUFBQTtJQURsQjtNQUdRLG1CQUFtQixFQUFBO01BSDNCO1FBTWdCLFdBQVc7UUFDWCxrQkFBa0IsRUFBQTtRQVBsQztVQVNvQixhQUFhLEVBQUE7UUFUakM7VUFZb0IsV0FBVyxFQUFBO0lBWi9CO01Ba0JRLHNCQUFzQixFQUFBO01BbEI5QjtRQW9CWSxtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLFFBQVE7UUFDUixtQkFBbUI7UUFDbkIsaUJBQWlCLEVBQUE7UUF4QjdCO1VBMEJnQiwwQkFBMEIsRUFBQTtVQTFCMUM7WUE0Qm9CLG1CQUFtQixFQUFBO01BNUJ2QztRQWlDWSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsUUFBUSxFQUFBO1FBckNwQjtVQXVDZ0IsY0FBYyxFQUFBLEVBQ2pCOztBQU9qQjtFQUNJO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QixFQUFBLEVBQ2pDIiwiZmlsZSI6InNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2Jhc2tldC9iYXNrZXQubWVkaWEuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpe1xyXG4gICAgLmFkZGl0aW9uYWwtZmllbGRze1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XHJcbiAgICB9XHJcbiAgICAuZmxleC1ib3h7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuICAgICAgICAudG9wLXBhbmVse1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIC50b3AtcGFuZWwtaW50cm97XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50b3AtcGFuZWwtYWN0aW9uc3sgICAgXHJcbiAgICAgICAgICAgICAgICAuYWN0aW9uLWJ0bntcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTI1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFza2V0LWNvbnRlbnR7XHJcbiAgICAgICAgICAgIC5vcmRlci1zdW1tYXJ5e1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMjUwcHg7XHJcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIC5mbGV4LWJveHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAudG9wLXBhbmVse1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAudG9wLXBhbmVsLWFjdGlvbnN7ICAgIFxyXG4gICAgICAgICAgICAgICAgLmFjdGlvbi1idG57XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFza2V0LWNvbnRlbnR7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIC5vcmRlcmVkLWl0ZW1zLWxpc3R7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IHVuc2V0O1xyXG4gICAgICAgICAgICAgICAgLm9yZGVyZWQtaXRlbXtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiBjYWxjKDEwMCUgLyAzKTtcclxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5vcmRlci1zdW1tYXJ5e1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGluaXRpYWw7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogdW5zZXQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgICAgICAgICAgaHIubm9uLXN0YXRpY3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCl7XHJcbiAgICAuZmxleC1ib3ggLmJhc2tldC1jb250ZW50IC5vcmRlcmVkLWl0ZW1zLWxpc3QgLm9yZGVyZWQtaXRlbSB7XHJcbiAgICAgICAgZmxleC1iYXNpczogNTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/basket-module/components/checkout/checkout.media.scss":
/*!***********************************************************************!*\
  !*** ./src/app/basket-module/components/checkout/checkout.media.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 1000px) {\n  .page-container {\n    padding-right: 8%;\n    padding-left: 8%; }\n    .page-container .flex-box .form-field {\n      margin-right: 20px;\n      flex-basis: 350px;\n      flex-shrink: 0; }\n    .page-container .flex-box .order-summary {\n      flex-basis: unset; } }\n\n@media (max-width: 700px) {\n  .page-container hr.seperator-hr {\n    display: initial; }\n  .page-container .flex-box {\n    flex-direction: column;\n    margin-bottom: 20px; }\n    .page-container .flex-box .form-field {\n      margin-right: 0;\n      flex-basis: unset;\n      margin-bottom: 50px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2NoZWNrb3V0L0M6XFxVc2Vyc1xcRVpcXERlc2t0b3BcXEFjYSBTaG9wXFxzaG9wXFxzaG9wL3NyY1xcYXBwXFxiYXNrZXQtbW9kdWxlXFxjb21wb25lbnRzXFxjaGVja291dFxcY2hlY2tvdXQubWVkaWEuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQixFQUFBO0lBRnBCO01BS1ksa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixjQUFjLEVBQUE7SUFQMUI7TUFVWSxpQkFBaUIsRUFBQSxFQUNwQjs7QUFLYjtFQUNJO0lBRVEsZ0JBQWdCLEVBQUE7RUFGeEI7SUFLUSxzQkFBc0I7SUFDdEIsbUJBQW1CLEVBQUE7SUFOM0I7TUFRWSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLG1CQUFtQixFQUFBLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2NoZWNrb3V0L2NoZWNrb3V0Lm1lZGlhLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcclxuXHJcbiAgICAucGFnZS1jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogOCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4JTtcclxuICAgICAgICAuZmxleC1ib3h7XHJcbiAgICAgICAgICAgIC5mb3JtLWZpZWxke1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1iYXNpczogMzUwcHg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAub3JkZXItc3VtbWFyeXtcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IHVuc2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzAwcHgpe1xyXG4gICAgLnBhZ2UtY29udGFpbmVyIHtcclxuICAgICAgICBoci5zZXBlcmF0b3ItaHJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mbGV4LWJveHtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgLmZvcm0tZmllbGR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWJhc2lzOiB1bnNldDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/basket-module/components/checkout/checkout.scss":
/*!*****************************************************************!*\
  !*** ./src/app/basket-module/components/checkout/checkout.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----- side-radius -----*/\n/*----- side-padding -----*/\n/*----- margins -----*/\n/* --- Shadows --- */\n/* ---------- Cascade ---------- */\n/*---------- Colors ----------*/\nhr.title-hr {\n  margin: 0; }\n.page-container {\n  padding: 20px 16%; }\n.page-container .top-panel {\n    display: flex;\n    align-items: center;\n    justify-content: space-between; }\n.page-container .top-panel .title {\n      font-weight: bold;\n      font-size: 16px;\n      font-variant: small-caps;\n      color: #446E8E;\n      text-shadow: 1px 1px 1px #c2c2c2; }\n.page-container .top-panel .back-btn {\n      outline: none;\n      color: #446E8E; }\n.page-container hr.seperator-hr {\n    display: none;\n    margin-top: 0;\n    margin-bottom: 30px;\n    margin-right: -100%;\n    margin-left: -100%; }\n.page-container .flex-box {\n    display: flex;\n    flex-direction: row;\n    margin: 15px 0; }\n.page-container .flex-box .form-field {\n      flex-grow: 1;\n      margin-right: 50px; }\n.page-container .flex-box .form-field form {\n        display: flex;\n        flex-direction: column; }\n.page-container .flex-box .form-field mat-form-field {\n        width: 100%;\n        font-size: 12px;\n        transition: margin 0.5s;\n        color: #446E8E; }\n.page-container .flex-box .form-field mat-form-field .mat-selected {\n          color: #446E8E !important; }\n.page-container .flex-box .order-summary {\n      flex-basis: 300px; }\n.error-indent {\n  margin-bottom: 0.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2NoZWNrb3V0L0M6XFxVc2Vyc1xcRVpcXERlc2t0b3BcXEFjYSBTaG9wXFxzaG9wXFxzaG9wL3NyY1xcYXBwXFxnbG9iYWwtbWl4aW5zLnNjc3MiLCJzcmMvYXBwL2Jhc2tldC1tb2R1bGUvY29tcG9uZW50cy9jaGVja291dC9DOlxcVXNlcnNcXEVaXFxEZXNrdG9wXFxBY2EgU2hvcFxcc2hvcFxcc2hvcC9zcmNcXGFwcFxcZ2xvYmFsLXZhcnMuc2NzcyIsInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2NoZWNrb3V0L0M6XFxVc2Vyc1xcRVpcXERlc2t0b3BcXEFjYSBTaG9wXFxzaG9wXFxzaG9wL3NyY1xcYXBwXFxiYXNrZXQtbW9kdWxlXFxjb21wb25lbnRzXFxjaGVja291dFxcY2hlY2tvdXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSwwQkFBQTtBQXlCQSwyQkFBQTtBQWNBLHNCQUFBO0FBb0JBLG9CQUFBO0FBb0JBLGtDQUFBO0FDaEZBLCtCQUFBO0FDRUE7RUFHSSxTQUFTLEVBQUE7QUFHYjtFQUNJLGlCQUFpQixFQUFBO0FBRHJCO0lBSVEsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEIsRUFBQTtBQU50QztNQVFZLGlCQUFpQjtNQUNqQixlQUFlO01BQ2Ysd0JBQXdCO01BQ3hCLGNEakJRO01Da0JSLGdDQUEyQyxFQUFBO0FBWnZEO01BZVksYUFBYTtNQUNiLGNEdEJRLEVBQUE7QUNNcEI7SUFzQlEsYUFBYTtJQUNiLGFBQWE7SUFDYixtQkFBbUI7SUZZbkIsbUJBQWM7SUFDZCxrQkFBYSxFQUFBO0FFckNyQjtJQTZCUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTtBQS9CdEI7TUFpQ1ksWUFBWTtNQUNaLGtCQUFrQixFQUFBO0FBbEM5QjtRQW9DZ0IsYUFBYTtRQUNiLHNCQUFzQixFQUFBO0FBckN0QztRQTBDZ0IsV0FBVztRQUNYLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsY0RuREksRUFBQTtBQ01wQjtVQWdEb0IseUJBQTZCLEVBQUE7QUFoRGpEO01BdURZLGlCQUFpQixFQUFBO0FBSzdCO0VBQ0ksb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYXNrZXQtbW9kdWxlL2NvbXBvbmVudHMvY2hlY2tvdXQvY2hlY2tvdXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLyotLS0tLSBzaWRlLXJhZGl1cyAtLS0tLSovXHJcblxyXG5AbWl4aW4gc2lkZS1yYWRpdXMoJHNpZGUsICRhbW91bnQsICRyZXNldDogdHJ1ZSkge1xyXG4gICAgQGlmKCRyZXNldCl7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5pdGlhbDtcclxuICAgIH1cclxuICAgIEBpZigkc2lkZSA9PSB0b3Ape1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICN7JGFtb3VudH07XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICN7JGFtb3VudH07XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZigkc2lkZSA9PSBib3R0b20pe1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICN7JGFtb3VudH07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICN7JGFtb3VudH07XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZigkc2lkZSA9PSBsZWZ0KXtcclxuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAjeyRhbW91bnR9O1xyXG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICN7JGFtb3VudH07XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZigkc2lkZSA9PSByaWdodCl7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICN7JGFtb3VudH07XHJcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICN7JGFtb3VudH07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4vKi0tLS0tIHNpZGUtcGFkZGluZyAtLS0tLSovXHJcblxyXG5AbWl4aW4gc2lkZS1wYWRkaW5nKCRhbW91bnQsICRkaXJlY3Rpb246IGhvcml6b250YWwpe1xyXG4gICAgQGlmKCRkaXJlY3Rpb24gPT0gaG9yaXpvbnRhbCl7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogI3skYW1vdW50fTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6ICN7JGFtb3VudH07XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZigkZGlyZWN0aW9uID09IHZlcnRpY2FsKXtcclxuICAgICAgICBwYWRkaW5nLXRvcDogI3skYW1vdW50fTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogI3skYW1vdW50fTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qLS0tLS0gbWFyZ2lucyAtLS0tLSovXHJcblxyXG5AbWl4aW4gc2lkZS1tYXJnaW4oJGFtb3VudCwgJGRpcmVjdGlvbjogaG9yaXpvbnRhbCl7XHJcbiAgICBAaWYoJGRpcmVjdGlvbiA9PSBob3Jpem9udGFsKXtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6ICN7JGFtb3VudH07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6ICN7JGFtb3VudH07XHJcbiAgICB9XHJcbiAgICBAZWxzZSBpZigkZGlyZWN0aW9uID09IHZlcnRpY2FsKXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAjeyRhbW91bnR9O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206ICN7JGFtb3VudH07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtaXhpbiByZXNldC1tYXJnaW5zIHtcclxuICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgICBtYXJnaW4tdG9wOiB1bnNldDtcclxuICAgIG1hcmdpbi1ib3R0b206IHVuc2V0O1xyXG59XHJcblxyXG4vKiAtLS0gU2hhZG93cyAtLS0gKi9cclxuXHJcbkBtaXhpbiBsaWdodC1zaGFkb3cgKCRjb2xvcjogZ3JheSl7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDNweCAkY29sb3I7XHJcbn1cclxuXHJcbkBtaXhpbiBtaWQtc2hhZG93ICgkY29sb3I6IGdyYXkpe1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCAkY29sb3I7XHJcbn1cclxuXHJcbkBtaXhpbiBzdHJvbmctc2hhZG93ICgkY29sb3I6IGdyYXkpe1xyXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAxMHB4IDEwcHggJGNvbG9yO1xyXG59XHJcblxyXG5AbWl4aW4gZXh0cmEtc2hhZG93ICgkY29sb3I6IGdyYXkpe1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMnB4IDE1cHggJGNvbG9yO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0gQ2FzY2FkZSAtLS0tLS0tLS0tICovXHJcblxyXG5AbWl4aW4gY2FzY2FkZSgkZGVwdGgsJGRpcmVjdGlvbjogaG9yaXpvbnRhbCwkY29sb3I6ICMzNjM2MzYpIHtcclxuXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuXHJcblxyXG4gICAgJHRyYW5zbGF0ZS1zY2FsZTogdW5kZWZpbmVkO1xyXG5cclxuICAgIEBpZiAoJGRpcmVjdGlvbiA9PSBob3Jpem9udGFsKXtcclxuICAgICAgICAkdHJhbnNsYXRlLXNjYWxlOiAjey0oJGRlcHRoIC8gMil9LCN7LSgkZGVwdGggLyAyKX07XHJcbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogI3stJGRlcHRoIC8gNX0gMHB4IDVweCAxcHggJGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAxcHggJGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIEBlbHNlIGlmKCRkaXJlY3Rpb24gPT0gdmVydGljYWwpe1xyXG4gICAgICAgICR0cmFuc2xhdGUtc2NhbGU6ICN7JGRlcHRoIC8gMn0sI3stKCRkZXB0aCAvIDIpfTtcclxuXHJcbiAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKXtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4ICN7LSRkZXB0aCAvIDJ9IDVweCAxcHggJGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggI3stJGRlcHRoIC8gNX0gNXB4IDFweCAkY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBmb3IgJGkgZnJvbSAxIHRocm91Z2ggNTB7XHJcbiAgICAgICAgJjpudGgtY2hpbGQoI3skaX0pe1xyXG4gICAgICAgICAgICBAaWYgKCRkaXJlY3Rpb24gPT0gaG9yaXpvbnRhbCkge1xyXG4gICAgICAgICAgICAgICAgbGVmdDogKCN7KCRpIC0gMSkgKiAtJGRlcHRofSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBAZWxzZSBpZigkZGlyZWN0aW9uID09IHZlcnRpY2FsKXtcclxuICAgICAgICAgICAgICAgIHRvcDogKCN7KCRpIC0gMSkgKiAtJGRlcHRofSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKCR0cmFuc2xhdGUtc2NhbGUpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDRweCAkY29sb3I7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuQG1peGluIGZsYXQtc2Nyb2xsKCRhbW91bnQ6IDAsJGZsb3c6IHZlcnRpY2FsKSB7XHJcbiAgICBcclxuXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDFlbTtcclxuICAgICAgICBAaWYoJGZsb3cgPT0gdmVydGljYWwpe1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzaWRlLXJhZGl1cyhyaWdodCwkYW1vdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGVsc2UgaWYoJGZsb3cgPT0gaG9yaXpvbnRhbCl7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpZGUtcmFkaXVzKGJvdHRvbSwkYW1vdW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgXHJcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICAgICAgICBAaWYoJGZsb3cgPT0gdmVydGljYWwpe1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2lkZS1yYWRpdXMocmlnaHQsJGFtb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBlbHNlIGlmKCRmbG93ID09IGhvcml6b250YWwpe1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzaWRlLXJhZGl1cyhib3R0b20sJGFtb3VudCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgICBcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0LCAxOTQsIDE5NCk7XHJcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHNsYXRlZ3JleTtcclxuXHJcbiAgICAgICAgQGlmKCRmbG93ID09IHZlcnRpY2FsKXtcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHNpZGUtcmFkaXVzKHJpZ2h0LCRhbW91bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAZWxzZSBpZigkZmxvdyA9PSBob3Jpem9udGFsKXtcclxuICAgICAgICAgICAgQGluY2x1ZGUgc2lkZS1yYWRpdXMoYm90dG9tLCRhbW91bnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG4vKi0tLS0tLS0tLS0gQ29sb3JzIC0tLS0tLS0tLS0qL1xyXG5cclxuJHRoZW1lLWRhcms6ICM0NDZFOEU7XHJcbiR0aGVtZS1saWdodDogIzIxOTZmMztcclxuJGhlYWRlci10aGVtZTogI2YwZjBmNTsgIiwiQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFsLW1peGlucy5zY3NzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFsLXZhcnMuc2Nzcyc7XHJcblxyXG5oci50aXRsZS1ocntcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ucGFnZS1jb250YWluZXJ7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE2JTtcclxuXHJcbiAgICAudG9wLXBhbmVse1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXZhcmlhbnQ6IHNtYWxsLWNhcHM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcclxuICAgICAgICAgICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IHJnYigxOTQsIDE5NCwgMTk0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJhY2stYnRue1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcms7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgaHIuc2VwZXJhdG9yLWhye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIEBpbmNsdWRlIHNpZGUtbWFyZ2luKC0xMDAlKTtcclxuICAgIH1cclxuXHJcbiAgICAuZmxleC1ib3h7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgICAgIC5mb3JtLWZpZWxke1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNTBweDtcclxuICAgICAgICAgICAgZm9ybXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgICAgIG1hdC1mb3JtLWZpZWxke1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBtYXJnaW4gMC41cztcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkdGhlbWUtZGFyaztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLm1hdC1zZWxlY3RlZHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWRhcmsgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgLm9yZGVyLXN1bW1hcnl7XHJcbiAgICAgICAgICAgIGZsZXgtYmFzaXM6IDMwMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmVycm9yLWluZGVudHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/basket-module/components/checkout/payment/checkout-payment.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/basket-module/components/checkout/payment/checkout-payment.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"page-container\">\r\n  <div class=\"top-panel\">\r\n      <div class=\"title\">Your Billing Info</div>\r\n      <button mat-button class=\"back-btn\" (click)=\"backToShipping()\">\r\n        <mat-icon>keyboard_arrow_left</mat-icon>\r\n        <span>Back</span>\r\n      </button>\r\n  </div>\r\n</div>\r\n\r\n<hr class=\"title-hr\">\r\n\r\n<div class=\"page-container\">\r\n\r\n  <div class=\"flex-box\">\r\n    <div class=\"form-field\">\r\n\r\n      <form autocomplete=\"off\" [formGroup]=\"paymentForm\">\r\n\r\n        <div class=\"full-width\">\r\n\r\n          <!-- Card Number -->\r\n          <div class=\"payment-form\">\r\n            <mat-form-field appearance=\"outline\" [class.error-indent]=\"cardNumberError\">\r\n              <mat-label>Card Number</mat-label>\r\n              <mat-hint align=\"end\">{{cardNumberHint}}</mat-hint>\r\n              <input _onlyDigits formControlName=\"cardNumber\" matInput [type]=\"hideCardNumber ? 'password' : 'text'\" required maxlength=\"16\">\r\n              <mat-icon [class.invalid-icon]=\"shownCardNumberError\" matSuffix (mousedown)=\"prevent()\" (click)=\"hideCardNumber = !hideCardNumber\" *ngIf=\"hideCardNumber\" matTooltip=\"showe card number\">{{'visibility_off'}}</mat-icon>\r\n              <mat-icon [class.invalid-icon]=\"shownCardNumberError\" matSuffix (mousedown)=\"prevent()\" (click)=\"hideCardNumber = !hideCardNumber\" *ngIf=\"!hideCardNumber\" matTooltip=\"hide card number\">{{'visibility'}}</mat-icon>\r\n              <mat-error>{{cardNumberError}}</mat-error>\r\n            </mat-form-field>\r\n          </div> \r\n  \r\n          <!-- Name On Card -->\r\n          <div class=\"payment-form\">\r\n            <mat-form-field appearance=\"outline\" [class.error-indent]=\"nameOnCardError\">\r\n              <mat-label>Name On Card</mat-label>\r\n              <mat-hint align=\"end\"><i>example: </i>JAMES PARKER</mat-hint>\r\n              <input formControlName=\"nameOnCard\" matInput required>\r\n              <mat-error>{{nameOnCardError}}</mat-error>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"small-forms\">\r\n          <!-- Month -->\r\n          <div class=\"payment-form\" id=\"month\">\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>Exp. Month</mat-label>\r\n              <mat-select formControlName=\"expMonth\">\r\n                <mat-option *ngFor=\"let month of months\" [value]=\"month\">{{month}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <!-- Year -->\r\n          <div class=\"payment-form\" id=\"year\">\r\n            <mat-form-field appearance=\"outline\">\r\n            <mat-label>Exp. Year</mat-label>\r\n              <mat-select formControlName=\"expYear\">\r\n                <mat-option *ngFor=\"let year of nearestYears\" [value]=\"year\">{{year}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n          <!-- CVV -->\r\n          <div class=\"payment-form\" id=\"cvv\">\r\n              <mat-form-field appearance=\"outline\" [class.error-indent]=\"cvvError\">\r\n                <mat-label>cvv</mat-label>\r\n                <mat-hint align=\"end\">Min-length 3</mat-hint>\r\n                  <input _onlyDigits formControlName=\"cvv\" matInput required>\r\n                <mat-error>{{cvvError}}</mat-error>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>        \r\n      </form>\r\n    </div>\r\n\r\n    <hr class=\"seperator-hr\">\r\n\r\n    <div class=\"order-summary\">\r\n      <app-order-summary [currentForm]=\"paymentForm\" action=\"PLACE ORDER\"></app-order-summary>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/basket-module/components/checkout/payment/checkout-payment.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/basket-module/components/checkout/payment/checkout-payment.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*----- side-radius -----*/\n/*----- side-padding -----*/\n/*----- margins -----*/\n/* --- Shadows --- */\n/* ---------- Cascade ---------- */\n.invalid-icon {\n  color: #b93434; }\nform .full-width {\n  display: flex;\n  flex-direction: column; }\nform .small-forms {\n  margin-top: 20px;\n  display: flex;\n  flex-direction: row; }\nform .small-forms #cvv {\n    margin-left: auto; }\nform .small-forms #month, form .small-forms #year {\n    margin-right: 10px; }\nform .small-forms .payment-form {\n    width: 90px; }\nform .small-forms .payment-form#cvv {\n    width: 140px; }\n@media (max-width: 700px) {\n  form .small-forms {\n    justify-content: space-between; }\n    form .small-forms .payment-form {\n      flex-grow: 1; }\n    form .small-forms #month, form .small-forms #year, form .small-forms #cvv {\n      margin-left: unset;\n      margin-right: unset;\n      margin-top: unset;\n      margin-bottom: unset; }\n    form .small-forms .payment-form#cvv {\n      width: 80px; }\n    form .small-forms #year {\n      margin-right: 10px;\n      margin-left: 10px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2NoZWNrb3V0L3BheW1lbnQvQzpcXFVzZXJzXFxFWlxcRGVza3RvcFxcQWNhIFNob3BcXHNob3BcXHNob3Avc3JjXFxhcHBcXGdsb2JhbC1taXhpbnMuc2NzcyIsInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2NoZWNrb3V0L3BheW1lbnQvQzpcXFVzZXJzXFxFWlxcRGVza3RvcFxcQWNhIFNob3BcXHNob3BcXHNob3Avc3JjXFxhcHBcXGJhc2tldC1tb2R1bGVcXGNvbXBvbmVudHNcXGNoZWNrb3V0XFxwYXltZW50XFxjaGVja291dC1wYXltZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLDBCQUFBO0FBeUJBLDJCQUFBO0FBY0Esc0JBQUE7QUFvQkEsb0JBQUE7QUFvQkEsa0NBQUE7QUMvRUE7RUFDSSxjQUF1QixFQUFBO0FBRzNCO0VBRVEsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0FBSDlCO0VBTVEsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUIsRUFBQTtBQVIzQjtJQVdZLGlCQUFpQixFQUFBO0FBWDdCO0lBY1ksa0JBQWtCLEVBQUE7QUFkOUI7SUFrQlksV0FBVyxFQUFBO0FBbEJ2QjtJQXFCWSxZQUNKLEVBQUE7QUFJUjtFQUNJO0lBQ0ksOEJBQThCLEVBQUE7SUFEbEM7TUFHUSxZQUFZLEVBQUE7SUFIcEI7TURzQkEsa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixpQkFBaUI7TUFDakIsb0JBQW9CLEVBQUE7SUN6QnBCO01BU1EsV0FBVyxFQUFBO0lBVG5CO01EWUksa0JBQWM7TUFDZCxpQkFBYSxFQUFBLEVDQVoiLCJmaWxlIjoic3JjL2FwcC9iYXNrZXQtbW9kdWxlL2NvbXBvbmVudHMvY2hlY2tvdXQvcGF5bWVudC9jaGVja291dC1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4vKi0tLS0tIHNpZGUtcmFkaXVzIC0tLS0tKi9cclxuXHJcbkBtaXhpbiBzaWRlLXJhZGl1cygkc2lkZSwgJGFtb3VudCwgJHJlc2V0OiB0cnVlKSB7XHJcbiAgICBAaWYoJHJlc2V0KXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiBpbml0aWFsO1xyXG4gICAgfVxyXG4gICAgQGlmKCRzaWRlID09IHRvcCl7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogI3skYW1vdW50fTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogI3skYW1vdW50fTtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmKCRzaWRlID09IGJvdHRvbSl7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogI3skYW1vdW50fTtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogI3skYW1vdW50fTtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmKCRzaWRlID09IGxlZnQpe1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICN7JGFtb3VudH07XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogI3skYW1vdW50fTtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmKCRzaWRlID09IHJpZ2h0KXtcclxuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogI3skYW1vdW50fTtcclxuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogI3skYW1vdW50fTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8qLS0tLS0gc2lkZS1wYWRkaW5nIC0tLS0tKi9cclxuXHJcbkBtaXhpbiBzaWRlLXBhZGRpbmcoJGFtb3VudCwgJGRpcmVjdGlvbjogaG9yaXpvbnRhbCl7XHJcbiAgICBAaWYoJGRpcmVjdGlvbiA9PSBob3Jpem9udGFsKXtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAjeyRhbW91bnR9O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogI3skYW1vdW50fTtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmKCRkaXJlY3Rpb24gPT0gdmVydGljYWwpe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAjeyRhbW91bnR9O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAjeyRhbW91bnR9O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLyotLS0tLSBtYXJnaW5zIC0tLS0tKi9cclxuXHJcbkBtaXhpbiBzaWRlLW1hcmdpbigkYW1vdW50LCAkZGlyZWN0aW9uOiBob3Jpem9udGFsKXtcclxuICAgIEBpZigkZGlyZWN0aW9uID09IGhvcml6b250YWwpe1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogI3skYW1vdW50fTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogI3skYW1vdW50fTtcclxuICAgIH1cclxuICAgIEBlbHNlIGlmKCRkaXJlY3Rpb24gPT0gdmVydGljYWwpe1xyXG4gICAgICAgIG1hcmdpbi10b3A6ICN7JGFtb3VudH07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogI3skYW1vdW50fTtcclxuICAgIH1cclxufVxyXG5cclxuQG1peGluIHJlc2V0LW1hcmdpbnMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxuICAgIG1hcmdpbi10b3A6IHVuc2V0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogdW5zZXQ7XHJcbn1cclxuXHJcbi8qIC0tLSBTaGFkb3dzIC0tLSAqL1xyXG5cclxuQG1peGluIGxpZ2h0LXNoYWRvdyAoJGNvbG9yOiBncmF5KXtcclxuICAgIGJveC1zaGFkb3c6IDJweCAycHggM3B4ICRjb2xvcjtcclxufVxyXG5cclxuQG1peGluIG1pZC1zaGFkb3cgKCRjb2xvcjogZ3JheSl7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4ICRjb2xvcjtcclxufVxyXG5cclxuQG1peGluIHN0cm9uZy1zaGFkb3cgKCRjb2xvcjogZ3JheSl7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDEwcHggMTBweCAkY29sb3I7XHJcbn1cclxuXHJcbkBtaXhpbiBleHRyYS1zaGFkb3cgKCRjb2xvcjogZ3JheSl7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDEycHggMTVweCAkY29sb3I7XHJcbn1cclxuXHJcblxyXG5cclxuLyogLS0tLS0tLS0tLSBDYXNjYWRlIC0tLS0tLS0tLS0gKi9cclxuXHJcbkBtaXhpbiBjYXNjYWRlKCRkZXB0aCwkZGlyZWN0aW9uOiBob3Jpem9udGFsLCRjb2xvcjogIzM2MzYzNikge1xyXG5cclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG5cclxuXHJcbiAgICAkdHJhbnNsYXRlLXNjYWxlOiB1bmRlZmluZWQ7XHJcblxyXG4gICAgQGlmICgkZGlyZWN0aW9uID09IGhvcml6b250YWwpe1xyXG4gICAgICAgICR0cmFuc2xhdGUtc2NhbGU6ICN7LSgkZGVwdGggLyAyKX0sI3stKCRkZXB0aCAvIDIpfTtcclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAjey0kZGVwdGggLyA1fSAwcHggNXB4IDFweCAkY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCAkY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgQGVsc2UgaWYoJGRpcmVjdGlvbiA9PSB2ZXJ0aWNhbCl7XHJcbiAgICAgICAgJHRyYW5zbGF0ZS1zY2FsZTogI3skZGVwdGggLyAyfSwjey0oJGRlcHRoIC8gMil9O1xyXG5cclxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpe1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggI3stJGRlcHRoIC8gMn0gNXB4IDFweCAkY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAjey0kZGVwdGggLyA1fSA1cHggMXB4ICRjb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCA1MHtcclxuICAgICAgICAmOm50aC1jaGlsZCgjeyRpfSl7XHJcbiAgICAgICAgICAgIEBpZiAoJGRpcmVjdGlvbiA9PSBob3Jpem9udGFsKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAoI3soJGkgLSAxKSAqIC0kZGVwdGh9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBlbHNlIGlmKCRkaXJlY3Rpb24gPT0gdmVydGljYWwpe1xyXG4gICAgICAgICAgICAgICAgdG9wOiAoI3soJGkgLSAxKSAqIC0kZGVwdGh9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoJHRyYW5zbGF0ZS1zY2FsZSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggNHB4ICRjb2xvcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWl4aW4gZmxhdC1zY3JvbGwoJGFtb3VudDogMCwkZmxvdzogdmVydGljYWwpIHtcclxuICAgIFxyXG5cclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICB3aWR0aDogMWVtO1xyXG4gICAgICAgIEBpZigkZmxvdyA9PSB2ZXJ0aWNhbCl7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpZGUtcmFkaXVzKHJpZ2h0LCRhbW91bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAZWxzZSBpZigkZmxvdyA9PSBob3Jpem9udGFsKXtcclxuICAgICAgICAgICAgQGluY2x1ZGUgc2lkZS1yYWRpdXMoYm90dG9tLCRhbW91bnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICBcclxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcclxuICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICAgIEBpZigkZmxvdyA9PSB2ZXJ0aWNhbCl7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzaWRlLXJhZGl1cyhyaWdodCwkYW1vdW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQGVsc2UgaWYoJGZsb3cgPT0gaG9yaXpvbnRhbCl7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIHNpZGUtcmFkaXVzKGJvdHRvbSwkYW1vdW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTQsIDE5NCwgMTk0KTtcclxuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgc2xhdGVncmV5O1xyXG5cclxuICAgICAgICBAaWYoJGZsb3cgPT0gdmVydGljYWwpe1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc2lkZS1yYWRpdXMocmlnaHQsJGFtb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBlbHNlIGlmKCRmbG93ID09IGhvcml6b250YWwpe1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzaWRlLXJhZGl1cyhib3R0b20sJGFtb3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vZ2xvYmFsLW1peGlucy5zY3NzJztcclxuXHJcbi5pbnZhbGlkLWljb257XHJcbiAgICBjb2xvcjogcmdiKDE4NSwgNTIsIDUyKVxyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIC5mdWxsLXdpZHRoe1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIH1cclxuICAgIC5zbWFsbC1mb3Jtc3tcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICAgICAgI2N2dntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNtb250aCAsICN5ZWFye1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucGF5bWVudC1mb3Jte1xyXG4gICAgICAgICAgICB3aWR0aDogOTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBheW1lbnQtZm9ybSNjdnZ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNDBweFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KXtcclxuICAgIGZvcm0gLnNtYWxsLWZvcm1ze1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAucGF5bWVudC1mb3Jte1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNtb250aCwgI3llYXIsICNjdnYge1xyXG4gICAgICAgICAgICBAaW5jbHVkZSByZXNldC1tYXJnaW5zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGF5bWVudC1mb3JtI2N2dntcclxuICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICN5ZWFye1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBzaWRlLW1hcmdpbigxMHB4KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/basket-module/components/checkout/payment/checkout-payment.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/basket-module/components/checkout/payment/checkout-payment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CheckoutPaymentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPaymentComponent", function() { return CheckoutPaymentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_basket_module_services_dates_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/basket-module/services/dates.service */ "./src/app/basket-module/services/dates.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_form_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/form-control.service */ "./src/app/form-control.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");






var CheckoutPaymentComponent = /** @class */ (function () {
    function CheckoutPaymentComponent(location, dates, build, control) {
        this.location = location;
        this.dates = dates;
        this.build = build;
        this.control = control;
        this.hideCardNumber = true;
        this.months = this.dates.getMonths();
    }
    CheckoutPaymentComponent.prototype.prevent = function () {
        return false;
    };
    CheckoutPaymentComponent.prototype.backToShipping = function () {
        this.location.back();
    };
    Object.defineProperty(CheckoutPaymentComponent.prototype, "nearestYears", {
        /* --- Getters --- */
        get: function () {
            return this.dates.getNearestYears(31);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "cardNumber", {
        get: function () {
            return this.paymentForm.get('cardNumber');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "nameOnCard", {
        get: function () {
            return this.paymentForm.get('nameOnCard');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "cvv", {
        get: function () {
            return this.paymentForm.get('cvv');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "expMonth", {
        get: function () {
            return this.paymentForm.get('expMonth');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "expYear", {
        get: function () {
            return this.paymentForm.get('expYear');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "cardNumberHint", {
        get: function () {
            return this.cardNumber.value.length <= 16 ? this.cardNumber.value.length + "/16" : 'Overflow';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "cardNumberError", {
        get: function () {
            return this.cardNumber.touched && this.control.getErrorMessage(this.cardNumber);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "nameOnCardError", {
        get: function () {
            return this.nameOnCard.touched && this.control.getErrorMessage(this.nameOnCard, 'Name on card must contain 2 fractions');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "cvvError", {
        get: function () {
            return this.cvv.touched && this.control.getErrorMessage(this.cvv);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutPaymentComponent.prototype, "shownCardNumberError", {
        get: function () {
            return this.cardNumber.touched && this.cardNumber.invalid;
        },
        enumerable: true,
        configurable: true
    });
    CheckoutPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentForm = this.build.group({
            cardNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(16), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(16)]],
            nameOnCard: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^[a-z,',-]+(\s)[a-z,',-]+$/i)]],
            expYear: [this.nearestYears[0]],
            expMonth: [this.months[0]],
            cvv: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
        });
        this.yearSelectorListener = this.expYear.valueChanges.subscribe(function (next) {
            _this.months = _this.dates.getMonths(next);
            if (!_this.months.includes(_this.expMonth.value)) {
                _this.expMonth.setValue(_this.months[0]);
            }
        });
    };
    CheckoutPaymentComponent.prototype.ngOnDestroy = function () {
        this.yearSelectorListener.unsubscribe();
    };
    CheckoutPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout-payment',
            template: __webpack_require__(/*! ./checkout-payment.component.html */ "./src/app/basket-module/components/checkout/payment/checkout-payment.component.html"),
            styles: [__webpack_require__(/*! ./checkout-payment.component.scss */ "./src/app/basket-module/components/checkout/payment/checkout-payment.component.scss"), __webpack_require__(/*! ../checkout.scss */ "./src/app/basket-module/components/checkout/checkout.scss"), __webpack_require__(/*! ../checkout.media.scss */ "./src/app/basket-module/components/checkout/checkout.media.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            src_app_basket_module_services_dates_service__WEBPACK_IMPORTED_MODULE_2__["DatesService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_form_control_service__WEBPACK_IMPORTED_MODULE_4__["FormControlService"]])
    ], CheckoutPaymentComponent);
    return CheckoutPaymentComponent;
}());



/***/ }),

/***/ "./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\r\n\r\n  <div class=\"top-panel\">\r\n    <div class=\"title\">Your Shipping Adress</div>\r\n    <button mat-button (click)=\"backToBasket()\" class=\"back-btn\">\r\n      <mat-icon>keyboard_arrow_left</mat-icon>\r\n      <span>Back</span>\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n\r\n<hr class=\"title-hr\">\r\n\r\n<div class=\"page-container\">\r\n        \r\n  <div class=\"flex-box\">\r\n\r\n    <div class=\"form-field\">\r\n\r\n      <form autocomplete=\"off\" [formGroup]=\"checkoutForm\">\r\n\r\n        <!-- Country -->\r\n        <div class=\"shipping-form\" id=\"country\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>Country</mat-label>\r\n            <mat-select formControlName=\"country\">\r\n              <ng-container *ngIf=\"countries\">\r\n                <mat-option *ngFor=\"let country of countries; index as i\"  [value]=\"i\">{{country[0]}}</mat-option>\r\n              </ng-container>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!-- City -->\r\n        <div class=\"shipping-form\" id=\"city\">\r\n          <mat-form-field appearance=\"outline\">\r\n          <mat-label>City</mat-label>\r\n          <mat-select formControlName=\"city\" >\r\n            <ng-container *ngIf=\"cities\">\r\n              <mat-option *ngFor=\"let city of cities; index as i\" [value]=\"i\">{{city}}</mat-option>\r\n            </ng-container>\r\n          </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!-- Full name -->\r\n        <div class=\"shipping-form\" id=\"full-name\">\r\n          <mat-form-field appearance=\"outline\" [class.error-indent]=\"fullNameError\">\r\n            <mat-label>Full-name</mat-label>\r\n            <mat-hint align=\"end\"><i>example:</i> James Parker</mat-hint>\r\n            <input _onlyAlphabet formControlName=\"fullName\" matInput required>\r\n            <mat-error>{{fullNameError}}</mat-error>\r\n          </mat-form-field>\r\n        </div> \r\n  \r\n        <!-- Adress -->\r\n        <div class=\"shipping-form\" id=\"adress\">\r\n          <mat-form-field appearance=\"outline\" [class.error-indent]=\"adressError\">\r\n            <mat-label>Adress</mat-label>\r\n            <mat-hint align=\"end\"><i>example:</i> Northern Avenue 5</mat-hint>\r\n            <input formControlName=\"adress\" matInput required>\r\n            <mat-error>{{getErrors(checkoutForm.get('adress'))}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n        <!-- Postal code -->\r\n        <div class=\"shipping-form\" id=\"postal-code\">\r\n          <mat-form-field appearance=\"outline\" [class.error-indent]=\"postalCodeError\">\r\n            <mat-label>Postal Code</mat-label>\r\n            <mat-hint align=\"end\">Min-length 4</mat-hint>\r\n            <input _onlyDigits formControlName=\"postalCode\" matInput required>\r\n            <mat-error>{{getErrors(checkoutForm.get('postalCode'))}}</mat-error>\r\n          </mat-form-field>\r\n        </div>\r\n      \r\n      </form>\r\n\r\n    </div>\r\n\r\n    <hr class=\"seperator-hr\">\r\n\r\n    <div class=\"order-summary\">\r\n      <app-order-summary \r\n      [currentForm]=\"checkoutForm\"\r\n      action=\"CONTINUE TO PAYMENT\"\r\n      ></app-order-summary>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#postal-code {\n  width: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2NoZWNrb3V0L3NoaXBwaW5nL0M6XFxVc2Vyc1xcRVpcXERlc2t0b3BcXEFjYSBTaG9wXFxzaG9wXFxzaG9wL3NyY1xcYXBwXFxiYXNrZXQtbW9kdWxlXFxjb21wb25lbnRzXFxjaGVja291dFxcc2hpcHBpbmdcXGNoZWNrb3V0LXNoaXBwaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL2NoZWNrb3V0L3NoaXBwaW5nL2NoZWNrb3V0LXNoaXBwaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Bvc3RhbC1jb2Rle1xyXG4gICAgd2lkdGg6IDUwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CheckoutShippingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutShippingComponent", function() { return CheckoutShippingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_form_control_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/form-control.service */ "./src/app/form-control.service.ts");
/* harmony import */ var _validators_root_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../validators/root/custom-validators */ "./src/app/validators/root/custom-validators.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");







var CheckoutShippingComponent = /** @class */ (function () {
    function CheckoutShippingComponent(http, formBuilder, control, loaction) {
        this.http = http;
        this.formBuilder = formBuilder;
        this.control = control;
        this.loaction = loaction;
        this.checkoutForm = this.formBuilder.group({
            country: [],
            city: [],
            fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _validators_root_custom_validators__WEBPACK_IMPORTED_MODULE_5__["_fullName"]]],
            adress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _validators_root_custom_validators__WEBPACK_IMPORTED_MODULE_5__["_adress"]]],
            postalCode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)]],
        });
    }
    /* --- Methods --- */
    CheckoutShippingComponent.prototype.backToBasket = function () {
        this.loaction.back();
    };
    CheckoutShippingComponent.prototype.getErrors = function (form) {
        return this.control.getErrorMessage(form);
    };
    Object.defineProperty(CheckoutShippingComponent.prototype, "fullNameError", {
        get: function () {
            return this.fullName.touched && this.control.getErrorMessage(this.fullName);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutShippingComponent.prototype, "adressError", {
        get: function () {
            return this.adress.touched && this.control.getErrorMessage(this.adress);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutShippingComponent.prototype, "postalCodeError", {
        get: function () {
            return this.postalCode.touched && this.control.getErrorMessage(this.postalCode);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutShippingComponent.prototype, "fullName", {
        get: function () {
            return this.checkoutForm.get('fullName');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutShippingComponent.prototype, "adress", {
        get: function () {
            return this.checkoutForm.get('adress');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckoutShippingComponent.prototype, "postalCode", {
        get: function () {
            return this.checkoutForm.get('postalCode');
        },
        enumerable: true,
        configurable: true
    });
    /* --- LC hooks --- */
    CheckoutShippingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkoutForm.get('country').valueChanges.subscribe(function (next) {
            _this.cities = _this.countries[next][1];
            _this.checkoutForm.get('city').setValue(0);
        });
        this.http.get('https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/6ee538beca8914133259b401ba47a550313e8984/countries.min.json')
            .subscribe(function (data) {
            _this.countries = Object.entries(data);
            _this.checkoutForm.get('country').setValue(7); // Armenia by default
        });
    };
    CheckoutShippingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkout-shipping',
            template: __webpack_require__(/*! ./checkout-shipping.component.html */ "./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.html"),
            styles: [__webpack_require__(/*! ./checkout-shipping.component.scss */ "./src/app/basket-module/components/checkout/shipping/checkout-shipping.component.scss"), __webpack_require__(/*! ../checkout.scss */ "./src/app/basket-module/components/checkout/checkout.scss"), __webpack_require__(/*! ../checkout.media.scss */ "./src/app/basket-module/components/checkout/checkout.media.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            src_app_form_control_service__WEBPACK_IMPORTED_MODULE_4__["FormControlService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]])
    ], CheckoutShippingComponent);
    return CheckoutShippingComponent;
}());



/***/ }),

/***/ "./src/app/basket-module/components/order-summary/order-summary.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/basket-module/components/order-summary/order-summary.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"flex-box\">\r\n\r\n  <!----- title ----->\r\n  <div class=\"title\">\r\n    <span>Order Summary</span>\r\n    <hr class=\"static\">\r\n  </div>\r\n\r\n  <!----- details ----->\r\n  <div class=\"details\">\r\n    <div class=\"items-total\">\r\n      <div class=\"detail-title\">Items total</div>\r\n      <div class=\"plain-line\"></div>\r\n      <div class=\"detail-result\">\r\n          <span >{{totalQuantity}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"total-pure-price\">\r\n      <div class=\"detail-title\">Total pure price</div>\r\n      <div class=\"plain-line\"></div>\r\n      <span class=\"detail-result\">\r\n          {{totalPrice | currency}}\r\n      </span>\r\n    </div>\r\n    <div class=\"estimated-shipping\">\r\n      <div class=\"detail-title\">Estimated shipping</div>\r\n      <div class=\"plain-line\"></div>\r\n      <div class=\"detail-result\">\r\n        <span>{{totalWeight}}g. - {{totalShipping | currency}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!----- promo-code ----->\r\n  <div class=\"promo-code\">\r\n    <input type=\"text\" placeholder=\"Enter Promo Code\">\r\n    <button>Apply</button>\r\n  </div>\r\n\r\n  <hr>\r\n\r\n  <!----- total ----->\r\n  <div class=\"total\">\r\n    <span>Total:</span>\r\n    <span anim-fork-on-changes>{{(totalPrice + totalShipping) | currency}}</span>\r\n  </div>\r\n\r\n\r\n  <!-- [disabled]=\"currentForm?.invalid\" -->\r\n\r\n  <!----- action-btn ----->\r\n  <div class=\"action-btn\">\r\n    <button \r\n    mat-raised-button\r\n    color=\"primary\"\r\n    (click)=\"nextRoute()\"\r\n    class=\"mat-btn\"\r\n    >{{action}}</button>\r\n  </div>\r\n\r\n  <div anim-fork-on-changes blink=\"true\" class=\"hidden-total\">\r\n    <span>Total:</span>\r\n    <span >{{(totalPrice + totalShipping) | currency}}</span>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/basket-module/components/order-summary/order-summary.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/basket-module/components/order-summary/order-summary.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-box {\n  position: relative;\n  background: #f8f8f8;\n  box-shadow: 1px 1px 5px #b8b8b8;\n  padding: 10px 20px;\n  border-radius: 5px;\n  color: gray;\n  font-size: 13px;\n  display: flex;\n  flex-direction: column; }\n  .flex-box .title {\n    order: 1;\n    font-size: 18px;\n    font-weight: bold;\n    color: #446E8E; }\n  .flex-box .details {\n    order: 2;\n    display: flex;\n    flex-direction: column; }\n  .flex-box .details > div {\n      display: flex;\n      flex-flow: row wrap;\n      justify-content: space-between;\n      align-items: center; }\n  .flex-box .details > div .detail-title {\n        font-weight: bold; }\n  .flex-box .details > div .detail-result {\n        text-decoration: underline; }\n  .flex-box .promo-code {\n    order: 3;\n    margin: 10px 0;\n    display: flex; }\n  .flex-box .promo-code * {\n      height: 30px;\n      border: solid 1px #2196f3;\n      outline: none; }\n  .flex-box .promo-code input {\n      padding: 1px 5px;\n      width: 80%; }\n  .flex-box .promo-code button {\n      width: 20%;\n      min-width: -webkit-min-content;\n      min-width: -moz-min-content;\n      min-width: min-content;\n      background: #2196f3;\n      color: white; }\n  .flex-box .promo-code button:active {\n        background: #598bb1; }\n  .flex-box .total {\n    order: 5;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    font-weight: bold;\n    color: #4887b9; }\n  .flex-box .action-btn {\n    order: 6;\n    margin-top: 7px; }\n  .flex-box .action-btn button {\n      width: 100%; }\n  .flex-box .hidden-total {\n    display: none;\n    position: absolute;\n    top: 0;\n    right: 0;\n    z-index: 5;\n    border-radius: inherit;\n    border-top-left-radius: 0;\n    border-bottom-right-radius: 0;\n    background: #2196f3;\n    color: white;\n    padding: 2px 5px;\n    box-shadow: -5px 5px 7px #f8f8f8; }\n  hr {\n  margin: 7px;\n  order: 4; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL29yZGVyLXN1bW1hcnkvQzpcXFVzZXJzXFxFWlxcRGVza3RvcFxcQWNhIFNob3BcXHNob3BcXHNob3Avc3JjXFxhcHBcXGJhc2tldC1tb2R1bGVcXGNvbXBvbmVudHNcXG9yZGVyLXN1bW1hcnlcXG9yZGVyLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQThCO0VBQzlCLCtCQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxlQUFlO0VBRWYsYUFBYTtFQUNiLHNCQUFzQixFQUFBO0VBVjFCO0lBYVEsUUFBUTtJQUNSLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYyxFQUFBO0VBaEJ0QjtJQW1CUSxRQUFRO0lBQ1IsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBckI5QjtNQXVCWSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDhCQUE4QjtNQUM5QixtQkFBbUIsRUFBQTtFQTFCL0I7UUE0QmdCLGlCQUFpQixFQUFBO0VBNUJqQztRQStCZ0IsMEJBQTBCLEVBQUE7RUEvQjFDO0lBcUNRLFFBQVE7SUFDUixjQUFjO0lBQ2QsYUFBYSxFQUFBO0VBdkNyQjtNQXlDWSxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLGFBQWEsRUFBQTtFQTNDekI7TUE4Q1ksZ0JBQWdCO01BQ2hCLFVBQVUsRUFBQTtFQS9DdEI7TUFrRFksVUFBVTtNQUNWLDhCQUFzQjtNQUF0QiwyQkFBc0I7TUFBdEIsc0JBQXNCO01BQ3RCLG1CQUFtQjtNQUNuQixZQUFZLEVBQUE7RUFyRHhCO1FBdURnQixtQkFBNkIsRUFBQTtFQXZEN0M7SUE0RFEsUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtJQUNqQixjQUFjLEVBQUE7RUFqRXRCO0lBb0VRLFFBQVE7SUFDUixlQUFlLEVBQUE7RUFyRXZCO01BdUVZLFdBQVcsRUFBQTtFQXZFdkI7SUEyRVEsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQ0FBMkMsRUFBQTtFQUtuRDtFQUNJLFdBQVc7RUFDWCxRQUFRLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9iYXNrZXQtbW9kdWxlL2NvbXBvbmVudHMvb3JkZXItc3VtbWFyeS9vcmRlci1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtYm94e1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiKDE4NCwgMTg0LCAxODQpO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgLnRpdGxle1xyXG4gICAgICAgIG9yZGVyOiAxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICAgICAgY29sb3I6ICM0NDZFOEU7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsc3tcclxuICAgICAgICBvcmRlcjogMjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgLmRldGFpbC10aXRsZXtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kZXRhaWwtcmVzdWx0e1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByb21vLWNvZGV7XHJcbiAgICAgICAgb3JkZXI6IDM7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAqe1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogc29saWQgMXB4ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxcHggNXB4O1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogbWluLWNvbnRlbnQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMyMTk2ZjM7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgJjphY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoODksIDEzOSwgMTc3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC50b3RhbHtcclxuICAgICAgICBvcmRlcjogNTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjNDg4N2I5O1xyXG4gICAgfVxyXG4gICAgLmFjdGlvbi1idG57XHJcbiAgICAgICAgb3JkZXI6IDY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogN3B4O1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmhpZGRlbi10b3RhbHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIxOTZmMztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDVweDtcclxuICAgICAgICBib3gtc2hhZG93OiAtNXB4IDVweCA3cHggcmdiKDI0OCwgMjQ4LCAyNDgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuaHJ7XHJcbiAgICBtYXJnaW46IDdweDtcclxuICAgIG9yZGVyOiA0O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/basket-module/components/order-summary/order-summary.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/basket-module/components/order-summary/order-summary.component.ts ***!
  \***********************************************************************************/
/*! exports provided: OrderSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryComponent", function() { return OrderSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_basket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/basket.service */ "./src/app/basket-module/services/basket.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var OrderSummaryComponent = /** @class */ (function () {
    function OrderSummaryComponent(router, bs) {
        this.router = router;
        this.bs = bs;
    }
    Object.defineProperty(OrderSummaryComponent.prototype, "totalQuantity", {
        /* --- Getters --- */
        get: function () {
            return this.bs.getTotalQuantity();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderSummaryComponent.prototype, "totalPrice", {
        get: function () {
            return this.bs.getTotalPrice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderSummaryComponent.prototype, "totalWeight", {
        get: function () {
            return this.bs.getTotalWeight();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderSummaryComponent.prototype, "totalShipping", {
        get: function () {
            return this.bs.getTotalShipping();
        },
        enumerable: true,
        configurable: true
    });
    /* --- Methods --- */
    OrderSummaryComponent.prototype.nextRoute = function () {
        switch (this.action) {
            case 'CHECKOUT':
                this.router.navigate(['/', 'basket', 'checkout']);
                break;
            case 'CONTINUE TO PAYMENT':
                this.router.navigate(['/', 'basket', 'checkout', 'payment']);
                break;
            case 'PLACE ORDER':
                this.bs.clearBasket();
                this.router.navigate(['/', 'home']);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], OrderSummaryComponent.prototype, "action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OrderSummaryComponent.prototype, "basket", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"])
    ], OrderSummaryComponent.prototype, "currentForm", void 0);
    OrderSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-summary',
            template: __webpack_require__(/*! ./order-summary.component.html */ "./src/app/basket-module/components/order-summary/order-summary.component.html"),
            styles: [__webpack_require__(/*! ./order-summary.component.scss */ "./src/app/basket-module/components/order-summary/order-summary.component.scss"), __webpack_require__(/*! ./order-summary.media.scss */ "./src/app/basket-module/components/order-summary/order-summary.media.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_basket_service__WEBPACK_IMPORTED_MODULE_2__["BasketService"]])
    ], OrderSummaryComponent);
    return OrderSummaryComponent;
}());



/***/ }),

/***/ "./src/app/basket-module/components/order-summary/order-summary.media.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/basket-module/components/order-summary/order-summary.media.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*---------- Colors ----------*/\n@media (max-width: 1000px) {\n  .flex-box {\n    font-size: 12px; }\n    .flex-box .title {\n      margin-bottom: 10px; }\n    .flex-box .details > div {\n      flex-wrap: wrap;\n      margin: 1px;\n      align-items: flex-start; }\n      .flex-box .details > div.items-total {\n        display: none; }\n      .flex-box .details > div .plain-line {\n        height: 1px;\n        background-image: linear-gradient(to right, #e7e7e7, #c4c4c4, #e7e7e7);\n        flex-grow: 1;\n        margin: 0 0.1px; }\n      .flex-box .details > div .detail-title {\n        flex-basis: 100%; }\n      .flex-box .details > div .detail-result {\n        margin-left: auto;\n        padding: 2px 5px;\n        text-decoration: none;\n        box-shadow: 1px 1px 3px gray;\n        border-bottom-left-radius: 3px;\n        border-bottom-right-radius: 3px;\n        color: #2196f3; }\n    .flex-box .promo-code {\n      margin-bottom: 0;\n      margin-top: 20px; }\n      .flex-box .promo-code input {\n        font-size: 12px; }\n      .flex-box .promo-code * {\n        height: 25px; }\n    .flex-box .total {\n      display: none; }\n    .flex-box .action-btn {\n      margin-top: 0; }\n      .flex-box .action-btn .mat-raised-button.mat-btn {\n        height: 30px;\n        font-size: 12px; }\n      .flex-box .action-btn button {\n        border-top-left-radius: 0;\n        border-top-right-radius: 0; }\n    .flex-box .hidden-total {\n      display: block; }\n      .flex-box .hidden-total :first-child {\n        display: none; }\n  hr {\n    display: none; } }\n@media (max-width: 700px) {\n  .flex-box {\n    flex-flow: row wrap;\n    align-items: center;\n    box-shadow: 0px 0px 5px 1px #b8b8b8; }\n    .flex-box .details {\n      flex-basis: 100%;\n      flex-direction: row; }\n      .flex-box .details > div {\n        flex-basis: 50%;\n        margin: 0 10px; }\n    .flex-box .promo-code {\n      margin-bottom: 10px;\n      margin-left: 10px;\n      order: 1;\n      margin-top: unset; }\n      .flex-box .promo-code input {\n        transition: all .3s;\n        background: transparent;\n        border-color: transparent;\n        border-bottom-color: #2196f3;\n        border-right-color: #2196f3;\n        color: #2196f3;\n        font-size: unset; }\n        .flex-box .promo-code input:focus {\n          background: #e2e2e2; }\n      .flex-box .promo-code button {\n        position: relative;\n        z-index: 1;\n        border-top: none; }\n        .flex-box .promo-code button::after {\n          content: \" \";\n          position: absolute;\n          display: block;\n          width: 100%;\n          height: 100%;\n          bottom: 0px;\n          left: -2px;\n          z-index: -1;\n          background: #2196f3;\n          -webkit-transform-origin: top right;\n                  transform-origin: top right;\n          -webkit-transform: skewX(-30deg);\n                  transform: skewX(-30deg); }\n        .flex-box .promo-code button:active {\n          background: #f0f0f0; }\n    .flex-box .action-btn {\n      flex-basis: 100%;\n      margin-top: 15px; }\n      .flex-box .action-btn button {\n        border-radius: 0; }\n      .flex-box .action-btn .mat-raised-button.mat-btn {\n        height: initial;\n        font-size: unset; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL29yZGVyLXN1bW1hcnkvQzpcXFVzZXJzXFxFWlxcRGVza3RvcFxcQWNhIFNob3BcXHNob3BcXHNob3Avc3JjXFxhcHBcXGdsb2JhbC12YXJzLnNjc3MiLCJzcmMvYXBwL2Jhc2tldC1tb2R1bGUvY29tcG9uZW50cy9vcmRlci1zdW1tYXJ5L0M6XFxVc2Vyc1xcRVpcXERlc2t0b3BcXEFjYSBTaG9wXFxzaG9wXFxzaG9wL3NyY1xcYXBwXFxiYXNrZXQtbW9kdWxlXFxjb21wb25lbnRzXFxvcmRlci1zdW1tYXJ5XFxvcmRlci1zdW1tYXJ5Lm1lZGlhLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsK0JBQUE7QUNFQTtFQUNJO0lBQ0ksZUFBZSxFQUFBO0lBRG5CO01BR1EsbUJBQW1CLEVBQUE7SUFIM0I7TUFXWSxlQUFlO01BQ2YsV0FBVztNQUNYLHVCQUF1QixFQUFBO01BYm5DO1FBUWdCLGFBQWEsRUFBQTtNQVI3QjtRQWdCZ0IsV0FBVztRQUNYLHNFQUF1RTtRQUN2RSxZQUFZO1FBQ1osZUFBZSxFQUFBO01BbkIvQjtRQXNCZ0IsZ0JBQWdCLEVBQUE7TUF0QmhDO1FBeUJnQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsOEJBQThCO1FBQzlCLCtCQUErQjtRQUMvQixjRC9CQyxFQUFBO0lDQWpCO01Bb0NRLGdCQUFnQjtNQUNoQixnQkFBZ0IsRUFBQTtNQXJDeEI7UUF1Q1ksZUFBZSxFQUFBO01BdkMzQjtRQTBDWSxZQUFZLEVBQUE7SUExQ3hCO01BOENRLGFBQWEsRUFBQTtJQTlDckI7TUFpRFEsYUFBYSxFQUFBO01BakRyQjtRQW1EWSxZQUFZO1FBQ1osZUFBZSxFQUFBO01BcEQzQjtRQXVEWSx5QkFBeUI7UUFDekIsMEJBQTBCLEVBQUE7SUF4RHRDO01BK0RRLGNBQWMsRUFBQTtNQS9EdEI7UUE2RFksYUFBYSxFQUFBO0VBS3pCO0lBQ0ksYUFBYSxFQUFBLEVBQ2hCO0FBSUw7RUFDSTtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUNBQThDLEVBQUE7SUFIbEQ7TUFNUSxnQkFBZ0I7TUFDaEIsbUJBQW1CLEVBQUE7TUFQM0I7UUFTWSxlQUFlO1FBQ2YsY0FBYyxFQUFBO0lBVjFCO01BY1EsbUJBQW1CO01BQ25CLGlCQUFpQjtNQUNqQixRQUFRO01BQ1IsaUJBQWlCLEVBQUE7TUFqQnpCO1FBb0JZLG1CQUFtQjtRQUNuQix1QkFBdUI7UUFDdkIseUJBQXlCO1FBQ3pCLDRCRGhHSztRQ2lHTCwyQkRqR0s7UUNrR0wsY0RsR0s7UUNtR0wsZ0JBQWdCLEVBQUE7UUExQjVCO1VBNEJnQixtQkFBOEIsRUFBQTtNQTVCOUM7UUFnQ1ksa0JBQWtCO1FBQ2xCLFVBQVU7UUFDVixnQkFBZ0IsRUFBQTtRQWxDNUI7VUFvQ2dCLFlBQVk7VUFDWixrQkFBa0I7VUFDbEIsY0FBYztVQUNkLFdBQVc7VUFDWCxZQUFZO1VBQ1osV0FBVztVQUNYLFVBQVU7VUFDVixXQUFXO1VBQ1gsbUJEckhDO1VDc0hELG1DQUEyQjtrQkFBM0IsMkJBQTJCO1VBQzNCLGdDQUF3QjtrQkFBeEIsd0JBQXdCLEVBQUE7UUE5Q3hDO1VBaURnQixtQkFBOEIsRUFBQTtJQWpEOUM7TUFzRFEsZ0JBQWdCO01BQ2hCLGdCQUFnQixFQUFBO01BdkR4QjtRQXlEWSxnQkFBZ0IsRUFBQTtNQXpENUI7UUE0RFksZUFBZTtRQUNmLGdCQUFnQixFQUFBLEVBQ25CIiwiZmlsZSI6InNyYy9hcHAvYmFza2V0LW1vZHVsZS9jb21wb25lbnRzL29yZGVyLXN1bW1hcnkvb3JkZXItc3VtbWFyeS5tZWRpYS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qLS0tLS0tLS0tLSBDb2xvcnMgLS0tLS0tLS0tLSovXHJcblxyXG4kdGhlbWUtZGFyazogIzQ0NkU4RTtcclxuJHRoZW1lLWxpZ2h0OiAjMjE5NmYzO1xyXG4kaGVhZGVyLXRoZW1lOiAjZjBmMGY1OyAiLCJcclxuQGltcG9ydCAnLi4vLi4vLi4vZ2xvYmFsLXZhcnMuc2Nzcyc7XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTAwMHB4KXtcclxuICAgIC5mbGV4LWJveHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWlsc3tcclxuICAgICAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICAmLml0ZW1zLXRvdGFse1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMXB4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLnBsYWluLWxpbmV7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZTdlN2U3LCAjYzRjNGM0ICwgI2U3ZTdlNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwLjFweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXRhaWwtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXRhaWwtcmVzdWx0e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IGdyYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR0aGVtZS1saWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvbW8tY29kZXtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudG90YWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb24tYnRue1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgICAgICAgICAubWF0LXJhaXNlZC1idXR0b24ubWF0LWJ0bntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmhpZGRlbi10b3RhbHtcclxuICAgICAgICAgICAgOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBocntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MDBweCl7XHJcbiAgICAuZmxleC1ib3h7XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDFweCByZ2IoMTg0LCAxODQsIDE4NCk7XHJcblxyXG4gICAgICAgIC5kZXRhaWxze1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgICAgICA+IGRpdntcclxuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9tby1jb2Rle1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgb3JkZXI6IDE7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IHVuc2V0O1xyXG5cclxuICAgICAgICAgICAgaW5wdXR7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHRoZW1lLWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiAkdGhlbWUtbGlnaHQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHRoZW1lLWxpZ2h0O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB1bnNldDtcclxuICAgICAgICAgICAgICAgICY6Zm9jdXN7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDIyNiwgMjI2LCAyMjYpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgICAgICAgICAgJjo6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0aGVtZS1saWdodDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMzBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjphY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiKDI0MCwgMjQwLCAyNDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY3Rpb24tYnRue1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5tYXQtcmFpc2VkLWJ1dHRvbi5tYXQtYnRue1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB1bnNldDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/basket-module/services/dates.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/basket-module/services/dates.service.ts ***!
  \*********************************************************/
/*! exports provided: DatesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatesService", function() { return DatesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DatesService = /** @class */ (function () {
    function DatesService() {
    }
    DatesService.prototype.generateArray = function (quantity, start) {
        return new Array(quantity).fill(null).map(function () { return start++; });
    };
    DatesService.prototype.getNearestYears = function (amount) {
        if (amount === void 0) { amount = 20; }
        var thisYear = new Date().getFullYear();
        return this.generateArray(amount, thisYear);
    };
    DatesService.prototype.getMonths = function (year) {
        var isThisYear = !year || year == new Date().getFullYear();
        var firstMonth = isThisYear ? new Date().getMonth() + 1 : 1;
        return this.generateArray(12 - firstMonth + 1, firstMonth);
    };
    DatesService.prototype.getMonthDays = function (monthIndex) {
        switch (monthIndex) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return this.generateArray(31, 1);
            case 4:
            case 6:
            case 9:
            case 11:
                return this.generateArray(30, 1);
            case 2:
                var thisYear = new Date().getFullYear();
                var days = void 0;
                if (thisYear % 4 === 2)
                    days = 28;
                else
                    days = 29;
                return this.generateArray(days, 1);
        }
    };
    DatesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DatesService);
    return DatesService;
}());



/***/ })

}]);
//# sourceMappingURL=basket-module-basket-module.js.map