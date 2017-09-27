(function() {
  'use strict';

  angular
    .module('angular-ac')
    .factory('Call', [
      function() {
        var _id,
          _created,
          _direction,
          _from,
          _to,
          _via,
          _duration,
          _isArchived,
          _callType;

        function Call(raw) {
          _id = raw.id;
          _created = raw.created_at;
          _direction = raw.direction;
          _from = raw.from;
          _to = raw.to;
          _via = raw.via;
          _duration = raw.duration;
          _isArchived = raw.is_archived;
          _callType = raw.call_type;
        }

        Call.prototype.id = function() {
          return _id;
        }

        Call.prototype.created = function created() {
          return _created
        }

        Call.prototype.direction = function direction() {
          return _direction;
        }

        Call.prototype.from = function from() {
          return _from;
        }

        Call.prototype.to = function to() {
          return _to;
        }

        Call.prototype.via = function via() {
          return _via;
        }

        Call.prototype.duration = function duration() {
          return _duration;
        }

        Call.prototype.isArchived = function is_archived() {
          return _isArchived;
        }

        Call.prototype.callType = function callType() {
          return _callType;
        }

        return Call;
      }
    ]);

})();