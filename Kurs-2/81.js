// Классы не поднимаются
// всегда используют 'use strict'

let eventMixin = {
    _eventHandlers: {
        select: 123,
    },
};

console.log(eventMixin._eventHandlers["select"]);
