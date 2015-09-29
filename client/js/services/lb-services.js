(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "User",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Users/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__findById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__destroyById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__updateById__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Users/:id/accessTokens/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__get__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Queries accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Users/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__create__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__delete__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$__count__accessTokens
         * @methodOf lbServices.User
         *
         * @description
         *
         * Counts accessTokens of User.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Users/:id/accessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#create
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createMany
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Users",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#upsert
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Users",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#exists
         * @methodOf lbServices.User
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Users/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Users/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#find
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Users",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#findOne
         * @methodOf lbServices.User
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Users/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#updateAll
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Users/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#deleteById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Users/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#count
         * @methodOf lbServices.User
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Users/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#prototype$updateAttributes
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Users/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#createChangeStream
         * @methodOf lbServices.User
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Users/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#login
         * @methodOf lbServices.User
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Users/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#logout
         * @methodOf lbServices.User
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Users/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#confirm
         * @methodOf lbServices.User
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Users/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#resetPassword
         * @methodOf lbServices.User
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Users/reset",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Users" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.User#updateOrCreate
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `User` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.User#update
         * @methodOf lbServices.User
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.User#destroyById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#removeById
         * @methodOf lbServices.User
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.User#modelName
    * @propertyOf lbServices.User
    * @description
    * The name of the model represented by this $resource,
    * i.e. `User`.
    */
    R.modelName = "User";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Account
 * @header lbServices.Account
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Account` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Account",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Accounts/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__findById__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/accessTokens/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__destroyById__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/accessTokens/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__updateById__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.posts.findById() instead.
        "prototype$__findById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.posts.destroyById() instead.
        "prototype$__destroyById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.posts.updateById() instead.
        "prototype$__updateById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/posts/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__findById__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find a related item by id for followers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for followers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__findById__followers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/followers/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__destroyById__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a related item by id for followers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for followers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__followers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/followers/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__updateById__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update a related item by id for followers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for followers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__updateById__followers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/followers/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__link__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Add a related item by id for followers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for followers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__link__followers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/followers/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__unlink__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Remove the followers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for followers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__followers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/followers/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__exists__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Check the existence of followers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for followers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__exists__followers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/followers/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__findById__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find a related item by id for following.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for following
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__findById__following": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/following/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__destroyById__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a related item by id for following.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for following
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__following": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/following/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__updateById__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update a related item by id for following.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for following
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__updateById__following": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/following/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__link__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Add a related item by id for following.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for following
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__link__following": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/following/rel/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__unlink__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Remove the following relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for following
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__unlink__following": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/following/rel/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__exists__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Check the existence of following relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for following
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__exists__following": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/following/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Account.interests.findById() instead.
        "prototype$__findById__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.interests.destroyById() instead.
        "prototype$__destroyById__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.interests.updateById() instead.
        "prototype$__updateById__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.interests.link() instead.
        "prototype$__link__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.interests.unlink() instead.
        "prototype$__unlink__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.interests.exists() instead.
        "prototype$__exists__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Account.likes.findById() instead.
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.likes.destroyById() instead.
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.likes.updateById() instead.
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.likes.link() instead.
        "prototype$__link__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.likes.unlink() instead.
        "prototype$__unlink__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.likes.exists() instead.
        "prototype$__exists__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/rel/:fk",
          method: "HEAD"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__get__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries accessTokens of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/Accounts/:id/accessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__create__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__create__accessTokens": {
          url: urlBase + "/Accounts/:id/accessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__delete__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__accessTokens": {
          url: urlBase + "/Accounts/:id/accessTokens",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__count__accessTokens
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Counts accessTokens of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__accessTokens": {
          url: urlBase + "/Accounts/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use Account.posts() instead.
        "prototype$__get__posts": {
          isArray: true,
          url: urlBase + "/Accounts/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use Account.posts.create() instead.
        "prototype$__create__posts": {
          url: urlBase + "/Accounts/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Account.posts.destroyAll() instead.
        "prototype$__delete__posts": {
          url: urlBase + "/Accounts/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use Account.posts.count() instead.
        "prototype$__count__posts": {
          url: urlBase + "/Accounts/:id/posts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__get__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries followers of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__get__followers": {
          isArray: true,
          url: urlBase + "/Accounts/:id/followers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__create__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Creates a new instance in followers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__create__followers": {
          url: urlBase + "/Accounts/:id/followers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__delete__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Deletes all followers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__followers": {
          url: urlBase + "/Accounts/:id/followers",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__count__followers
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Counts followers of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__followers": {
          url: urlBase + "/Accounts/:id/followers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__get__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries following of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__get__following": {
          isArray: true,
          url: urlBase + "/Accounts/:id/following",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__create__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Creates a new instance in following of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$__create__following": {
          url: urlBase + "/Accounts/:id/following",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__delete__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Deletes all following of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__following": {
          url: urlBase + "/Accounts/:id/following",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$__count__following
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Counts following of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "prototype$__count__following": {
          url: urlBase + "/Accounts/:id/following/count",
          method: "GET"
        },

        // INTERNAL. Use Account.interests() instead.
        "prototype$__get__interests": {
          isArray: true,
          url: urlBase + "/Accounts/:id/interests",
          method: "GET"
        },

        // INTERNAL. Use Account.interests.create() instead.
        "prototype$__create__interests": {
          url: urlBase + "/Accounts/:id/interests",
          method: "POST"
        },

        // INTERNAL. Use Account.interests.destroyAll() instead.
        "prototype$__delete__interests": {
          url: urlBase + "/Accounts/:id/interests",
          method: "DELETE"
        },

        // INTERNAL. Use Account.interests.count() instead.
        "prototype$__count__interests": {
          url: urlBase + "/Accounts/:id/interests/count",
          method: "GET"
        },

        // INTERNAL. Use Account.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/Accounts/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Account.likes.create() instead.
        "prototype$__create__likes": {
          url: urlBase + "/Accounts/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Account.likes.destroyAll() instead.
        "prototype$__delete__likes": {
          url: urlBase + "/Accounts/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Account.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/Accounts/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#create
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Accounts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#createMany
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Accounts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#upsert
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Accounts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#exists
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Accounts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#findById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Accounts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#find
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Accounts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#findOne
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Accounts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#updateAll
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Accounts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#deleteById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Accounts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#count
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Accounts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#prototype$updateAttributes
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Accounts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#createChangeStream
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Accounts/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#login
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         * 
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         * 
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/Accounts/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#logout
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/Accounts/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#confirm
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` - 
         *
         *  - `token` – `{string}` - 
         *
         *  - `redirect` – `{string=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/Accounts/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#resetPassword
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/Accounts/reset",
          method: "POST"
        },

        // INTERNAL. Use Category.interests.findById() instead.
        "::findById::Category::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.interests.destroyById() instead.
        "::destroyById::Category::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.interests.updateById() instead.
        "::updateById::Category::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.interests.link() instead.
        "::link::Category::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.interests.unlink() instead.
        "::unlink::Category::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.interests.exists() instead.
        "::exists::Category::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.interests() instead.
        "::get::Category::interests": {
          isArray: true,
          url: urlBase + "/Categories/:id/interests",
          method: "GET"
        },

        // INTERNAL. Use Category.interests.create() instead.
        "::create::Category::interests": {
          url: urlBase + "/Categories/:id/interests",
          method: "POST"
        },

        // INTERNAL. Use Category.interests.createMany() instead.
        "::createMany::Category::interests": {
          isArray: true,
          url: urlBase + "/Categories/:id/interests",
          method: "POST"
        },

        // INTERNAL. Use Category.interests.destroyAll() instead.
        "::delete::Category::interests": {
          url: urlBase + "/Categories/:id/interests",
          method: "DELETE"
        },

        // INTERNAL. Use Category.interests.count() instead.
        "::count::Category::interests": {
          url: urlBase + "/Categories/:id/interests/count",
          method: "GET"
        },

        // INTERNAL. Use Post.account() instead.
        "::get::Post::account": {
          url: urlBase + "/Posts/:id/account",
          method: "GET"
        },

        // INTERNAL. Use Post.likes.findById() instead.
        "::findById::Post::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.likes.destroyById() instead.
        "::destroyById::Post::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.likes.updateById() instead.
        "::updateById::Post::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.likes.link() instead.
        "::link::Post::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.likes.unlink() instead.
        "::unlink::Post::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.likes.exists() instead.
        "::exists::Post::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.likes() instead.
        "::get::Post::likes": {
          isArray: true,
          url: urlBase + "/Posts/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Post.likes.create() instead.
        "::create::Post::likes": {
          url: urlBase + "/Posts/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Post.likes.createMany() instead.
        "::createMany::Post::likes": {
          isArray: true,
          url: urlBase + "/Posts/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Post.likes.destroyAll() instead.
        "::delete::Post::likes": {
          url: urlBase + "/Posts/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Post.likes.count() instead.
        "::count::Post::likes": {
          url: urlBase + "/Posts/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Question.account() instead.
        "::get::Question::account": {
          url: urlBase + "/Questions/:id/account",
          method: "GET"
        },

        // INTERNAL. Use Question.likes.findById() instead.
        "::findById::Question::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.likes.destroyById() instead.
        "::destroyById::Question::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.likes.updateById() instead.
        "::updateById::Question::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.likes.link() instead.
        "::link::Question::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.likes.unlink() instead.
        "::unlink::Question::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.likes.exists() instead.
        "::exists::Question::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.likes() instead.
        "::get::Question::likes": {
          isArray: true,
          url: urlBase + "/Questions/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Question.likes.create() instead.
        "::create::Question::likes": {
          url: urlBase + "/Questions/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Question.likes.createMany() instead.
        "::createMany::Question::likes": {
          isArray: true,
          url: urlBase + "/Questions/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Question.likes.destroyAll() instead.
        "::delete::Question::likes": {
          url: urlBase + "/Questions/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Question.likes.count() instead.
        "::count::Question::likes": {
          url: urlBase + "/Questions/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Follow.follower() instead.
        "::get::Follow::follower": {
          url: urlBase + "/Follows/:id/follower",
          method: "GET"
        },

        // INTERNAL. Use Follow.followee() instead.
        "::get::Follow::followee": {
          url: urlBase + "/Follows/:id/followee",
          method: "GET"
        },

        // INTERNAL. Use Interest.account() instead.
        "::get::Interest::account": {
          url: urlBase + "/Interests/:id/account",
          method: "GET"
        },

        // INTERNAL. Use Like.account() instead.
        "::get::Like::account": {
          url: urlBase + "/Likes/:id/account",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Account#getCurrent
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/Accounts" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Account#updateOrCreate
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Account#update
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Account#destroyById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Account#removeById
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Account#getCachedCurrent
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.Account#login} or
         * {@link lbServices.Account#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A Account instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Account#isAuthenticated
         * @methodOf lbServices.Account
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.Account#getCurrentId
         * @methodOf lbServices.Account
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.Account#modelName
    * @propertyOf lbServices.Account
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Account`.
    */
    R.modelName = "Account";

    /**
     * @ngdoc object
     * @name lbServices.Account.posts
     * @header lbServices.Account.posts
     * @object
     * @description
     *
     * The object `Account.posts` groups methods
     * manipulating `Post` instances related to `Account`.
     *
     * Call {@link lbServices.Account#posts Account.posts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Account#posts
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries posts of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Account::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.posts#count
         * @methodOf lbServices.Account.posts
         *
         * @description
         *
         * Counts posts of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.posts.count = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::count::Account::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.posts#create
         * @methodOf lbServices.Account.posts
         *
         * @description
         *
         * Creates a new instance in posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.create = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::create::Account::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.posts#createMany
         * @methodOf lbServices.Account.posts
         *
         * @description
         *
         * Creates a new instance in posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.createMany = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::createMany::Account::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.posts#destroyAll
         * @methodOf lbServices.Account.posts
         *
         * @description
         *
         * Deletes all posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyAll = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::delete::Account::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.posts#destroyById
         * @methodOf lbServices.Account.posts
         *
         * @description
         *
         * Delete a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::destroyById::Account::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.posts#findById
         * @methodOf lbServices.Account.posts
         *
         * @description
         *
         * Find a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.findById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::findById::Account::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.posts#updateById
         * @methodOf lbServices.Account.posts
         *
         * @description
         *
         * Update a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.updateById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::updateById::Account::posts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Account.interests
     * @header lbServices.Account.interests
     * @object
     * @description
     *
     * The object `Account.interests` groups methods
     * manipulating `Category` instances related to `Account`.
     *
     * Call {@link lbServices.Account#interests Account.interests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Account#interests
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries interests of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.interests = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#count
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Counts interests of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.interests.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#create
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Creates a new instance in interests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.interests.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#createMany
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Creates a new instance in interests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.interests.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#destroyAll
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Deletes all interests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.interests.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#destroyById
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Delete a related item by id for interests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.interests.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#exists
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Check the existence of interests relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.interests.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#findById
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Find a related item by id for interests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.interests.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#link
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Add a related item by id for interests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.interests.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#unlink
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Remove the interests relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.interests.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::Account::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.interests#updateById
         * @methodOf lbServices.Account.interests
         *
         * @description
         *
         * Update a related item by id for interests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.interests.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::Account::interests"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Account.likes
     * @header lbServices.Account.likes
     * @object
     * @description
     *
     * The object `Account.likes` groups methods
     * manipulating `Post` instances related to `Account`.
     *
     * Call {@link lbServices.Account#likes Account.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Account#likes
         * @methodOf lbServices.Account
         *
         * @description
         *
         * Queries likes of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#count
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Counts likes of Account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::count::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#create
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.likes.create = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::create::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#createMany
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::createMany::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#destroyAll
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::delete::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#destroyById
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::destroyById::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#exists
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Check the existence of likes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.likes.exists = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::exists::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#findById
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::findById::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#link
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Add a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.likes.link = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::link::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#unlink
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Remove the likes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.unlink = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::unlink::Account::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Account.likes#updateById
         * @methodOf lbServices.Account.likes
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::updateById::Account::likes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Category",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Categories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Category.posts.findById() instead.
        "prototype$__findById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.posts.destroyById() instead.
        "prototype$__destroyById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.posts.updateById() instead.
        "prototype$__updateById__posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/posts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.interests.findById() instead.
        "prototype$__findById__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.interests.destroyById() instead.
        "prototype$__destroyById__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.interests.updateById() instead.
        "prototype$__updateById__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.interests.link() instead.
        "prototype$__link__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.interests.unlink() instead.
        "prototype$__unlink__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.interests.exists() instead.
        "prototype$__exists__interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/interests/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.posts() instead.
        "prototype$__get__posts": {
          isArray: true,
          url: urlBase + "/Categories/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use Category.posts.create() instead.
        "prototype$__create__posts": {
          url: urlBase + "/Categories/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Category.posts.destroyAll() instead.
        "prototype$__delete__posts": {
          url: urlBase + "/Categories/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use Category.posts.count() instead.
        "prototype$__count__posts": {
          url: urlBase + "/Categories/:id/posts/count",
          method: "GET"
        },

        // INTERNAL. Use Category.interests() instead.
        "prototype$__get__interests": {
          isArray: true,
          url: urlBase + "/Categories/:id/interests",
          method: "GET"
        },

        // INTERNAL. Use Category.interests.create() instead.
        "prototype$__create__interests": {
          url: urlBase + "/Categories/:id/interests",
          method: "POST"
        },

        // INTERNAL. Use Category.interests.destroyAll() instead.
        "prototype$__delete__interests": {
          url: urlBase + "/Categories/:id/interests",
          method: "DELETE"
        },

        // INTERNAL. Use Category.interests.count() instead.
        "prototype$__count__interests": {
          url: urlBase + "/Categories/:id/interests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#create
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createMany
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#upsert
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Categories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#exists
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Categories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Categories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#find
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Categories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findOne
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Categories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#updateAll
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Categories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#deleteById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Categories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#count
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Categories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#prototype$updateAttributes
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Categories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createChangeStream
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Categories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Account.interests.findById() instead.
        "::findById::Account::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.interests.destroyById() instead.
        "::destroyById::Account::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.interests.updateById() instead.
        "::updateById::Account::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.interests.link() instead.
        "::link::Account::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.interests.unlink() instead.
        "::unlink::Account::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.interests.exists() instead.
        "::exists::Account::interests": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/interests/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Account.interests() instead.
        "::get::Account::interests": {
          isArray: true,
          url: urlBase + "/Accounts/:id/interests",
          method: "GET"
        },

        // INTERNAL. Use Account.interests.create() instead.
        "::create::Account::interests": {
          url: urlBase + "/Accounts/:id/interests",
          method: "POST"
        },

        // INTERNAL. Use Account.interests.createMany() instead.
        "::createMany::Account::interests": {
          isArray: true,
          url: urlBase + "/Accounts/:id/interests",
          method: "POST"
        },

        // INTERNAL. Use Account.interests.destroyAll() instead.
        "::delete::Account::interests": {
          url: urlBase + "/Accounts/:id/interests",
          method: "DELETE"
        },

        // INTERNAL. Use Account.interests.count() instead.
        "::count::Account::interests": {
          url: urlBase + "/Accounts/:id/interests/count",
          method: "GET"
        },

        // INTERNAL. Use Post.category() instead.
        "::get::Post::category": {
          url: urlBase + "/Posts/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Question.category() instead.
        "::get::Question::category": {
          url: urlBase + "/Questions/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Interest.category() instead.
        "::get::Interest::category": {
          url: urlBase + "/Interests/:id/category",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Category#updateOrCreate
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Category#update
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Category#destroyById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Category#removeById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Category#modelName
    * @propertyOf lbServices.Category
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Category`.
    */
    R.modelName = "Category";

    /**
     * @ngdoc object
     * @name lbServices.Category.posts
     * @header lbServices.Category.posts
     * @object
     * @description
     *
     * The object `Category.posts` groups methods
     * manipulating `Post` instances related to `Category`.
     *
     * Call {@link lbServices.Category#posts Category.posts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#posts
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries posts of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Category::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.posts#count
         * @methodOf lbServices.Category.posts
         *
         * @description
         *
         * Counts posts of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.posts.count = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::count::Category::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.posts#create
         * @methodOf lbServices.Category.posts
         *
         * @description
         *
         * Creates a new instance in posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.create = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::create::Category::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.posts#createMany
         * @methodOf lbServices.Category.posts
         *
         * @description
         *
         * Creates a new instance in posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.createMany = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::createMany::Category::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.posts#destroyAll
         * @methodOf lbServices.Category.posts
         *
         * @description
         *
         * Deletes all posts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyAll = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::delete::Category::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.posts#destroyById
         * @methodOf lbServices.Category.posts
         *
         * @description
         *
         * Delete a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.posts.destroyById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::destroyById::Category::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.posts#findById
         * @methodOf lbServices.Category.posts
         *
         * @description
         *
         * Find a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.findById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::findById::Category::posts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.posts#updateById
         * @methodOf lbServices.Category.posts
         *
         * @description
         *
         * Update a related item by id for posts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for posts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.posts.updateById = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::updateById::Category::posts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Category.interests
     * @header lbServices.Category.interests
     * @object
     * @description
     *
     * The object `Category.interests` groups methods
     * manipulating `Account` instances related to `Category`.
     *
     * Call {@link lbServices.Category#interests Category.interests()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#interests
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries interests of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.interests = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#count
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Counts interests of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.interests.count = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::count::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#create
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Creates a new instance in interests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.interests.create = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::create::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#createMany
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Creates a new instance in interests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.interests.createMany = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::createMany::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#destroyAll
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Deletes all interests of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.interests.destroyAll = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::delete::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#destroyById
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Delete a related item by id for interests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.interests.destroyById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::destroyById::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#exists
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Check the existence of interests relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.interests.exists = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::exists::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#findById
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Find a related item by id for interests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.interests.findById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::findById::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#link
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Add a related item by id for interests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.interests.link = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::link::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#unlink
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Remove the interests relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.interests.unlink = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::unlink::Category::interests"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.interests#updateById
         * @methodOf lbServices.Category.interests
         *
         * @description
         *
         * Update a related item by id for interests.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for interests
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.interests.updateById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::updateById::Category::interests"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Post
 * @header lbServices.Post
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Post` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Post",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Posts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Post.category() instead.
        "prototype$__get__category": {
          url: urlBase + "/Posts/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Post.account() instead.
        "prototype$__get__account": {
          url: urlBase + "/Posts/:id/account",
          method: "GET"
        },

        // INTERNAL. Use Post.question.findById() instead.
        "prototype$__findById__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.question.destroyById() instead.
        "prototype$__destroyById__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.question.updateById() instead.
        "prototype$__updateById__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.question.link() instead.
        "prototype$__link__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.question.unlink() instead.
        "prototype$__unlink__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.question.exists() instead.
        "prototype$__exists__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.answers.findById() instead.
        "prototype$__findById__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.answers.destroyById() instead.
        "prototype$__destroyById__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answers.updateById() instead.
        "prototype$__updateById__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.answers.link() instead.
        "prototype$__link__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.answers.unlink() instead.
        "prototype$__unlink__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answers.exists() instead.
        "prototype$__exists__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.answer.findById() instead.
        "prototype$__findById__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.answer.destroyById() instead.
        "prototype$__destroyById__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answer.updateById() instead.
        "prototype$__updateById__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.answer.link() instead.
        "prototype$__link__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.answer.unlink() instead.
        "prototype$__unlink__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answer.exists() instead.
        "prototype$__exists__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.comments.findById() instead.
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.updateById() instead.
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.comments.link() instead.
        "prototype$__link__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.comments.unlink() instead.
        "prototype$__unlink__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.exists() instead.
        "prototype$__exists__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.likes.findById() instead.
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.likes.destroyById() instead.
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.likes.updateById() instead.
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.likes.link() instead.
        "prototype$__link__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.likes.unlink() instead.
        "prototype$__unlink__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.likes.exists() instead.
        "prototype$__exists__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/likes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.question() instead.
        "prototype$__get__question": {
          isArray: true,
          url: urlBase + "/Posts/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Post.question.create() instead.
        "prototype$__create__question": {
          url: urlBase + "/Posts/:id/question",
          method: "POST"
        },

        // INTERNAL. Use Post.question.destroyAll() instead.
        "prototype$__delete__question": {
          url: urlBase + "/Posts/:id/question",
          method: "DELETE"
        },

        // INTERNAL. Use Post.question.count() instead.
        "prototype$__count__question": {
          url: urlBase + "/Posts/:id/question/count",
          method: "GET"
        },

        // INTERNAL. Use Post.answers() instead.
        "prototype$__get__answers": {
          isArray: true,
          url: urlBase + "/Posts/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Post.answers.create() instead.
        "prototype$__create__answers": {
          url: urlBase + "/Posts/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Post.answers.destroyAll() instead.
        "prototype$__delete__answers": {
          url: urlBase + "/Posts/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answers.count() instead.
        "prototype$__count__answers": {
          url: urlBase + "/Posts/:id/answers/count",
          method: "GET"
        },

        // INTERNAL. Use Post.answer() instead.
        "prototype$__get__answer": {
          isArray: true,
          url: urlBase + "/Posts/:id/answer",
          method: "GET"
        },

        // INTERNAL. Use Post.answer.create() instead.
        "prototype$__create__answer": {
          url: urlBase + "/Posts/:id/answer",
          method: "POST"
        },

        // INTERNAL. Use Post.answer.destroyAll() instead.
        "prototype$__delete__answer": {
          url: urlBase + "/Posts/:id/answer",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answer.count() instead.
        "prototype$__count__answer": {
          url: urlBase + "/Posts/:id/answer/count",
          method: "GET"
        },

        // INTERNAL. Use Post.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Posts/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Posts/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Post.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Posts/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Posts/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Post.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/Posts/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Post.likes.create() instead.
        "prototype$__create__likes": {
          url: urlBase + "/Posts/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Post.likes.destroyAll() instead.
        "prototype$__delete__likes": {
          url: urlBase + "/Posts/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Post.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/Posts/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#create
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Posts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#createMany
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Posts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#upsert
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Posts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#exists
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Posts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#findById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Posts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#find
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Posts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#findOne
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Posts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#updateAll
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Posts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#deleteById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Posts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#count
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Posts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#prototype$updateAttributes
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Posts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#createChangeStream
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Posts/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#topQuestionsMethod
         * @methodOf lbServices.Post
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `limit` – `{number}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `topQuestions` – `{Array=}` - 
         */
        "topQuestionsMethod": {
          url: urlBase + "/Posts/topQuestions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Post#postLikes
         * @methodOf lbServices.Post
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `likes` – `{Array=}` - 
         */
        "postLikes": {
          url: urlBase + "/Posts/postLikes",
          method: "GET"
        },

        // INTERNAL. Use Account.posts.findById() instead.
        "::findById::Account::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.posts.destroyById() instead.
        "::destroyById::Account::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.posts.updateById() instead.
        "::updateById::Account::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/posts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.likes.findById() instead.
        "::findById::Account::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Account.likes.destroyById() instead.
        "::destroyById::Account::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.likes.updateById() instead.
        "::updateById::Account::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.likes.link() instead.
        "::link::Account::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Account.likes.unlink() instead.
        "::unlink::Account::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Account.likes.exists() instead.
        "::exists::Account::likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Accounts/:id/likes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Account.posts() instead.
        "::get::Account::posts": {
          isArray: true,
          url: urlBase + "/Accounts/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use Account.posts.create() instead.
        "::create::Account::posts": {
          url: urlBase + "/Accounts/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Account.posts.createMany() instead.
        "::createMany::Account::posts": {
          isArray: true,
          url: urlBase + "/Accounts/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Account.posts.destroyAll() instead.
        "::delete::Account::posts": {
          url: urlBase + "/Accounts/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use Account.posts.count() instead.
        "::count::Account::posts": {
          url: urlBase + "/Accounts/:id/posts/count",
          method: "GET"
        },

        // INTERNAL. Use Account.likes() instead.
        "::get::Account::likes": {
          isArray: true,
          url: urlBase + "/Accounts/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Account.likes.create() instead.
        "::create::Account::likes": {
          url: urlBase + "/Accounts/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Account.likes.createMany() instead.
        "::createMany::Account::likes": {
          isArray: true,
          url: urlBase + "/Accounts/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Account.likes.destroyAll() instead.
        "::delete::Account::likes": {
          url: urlBase + "/Accounts/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Account.likes.count() instead.
        "::count::Account::likes": {
          url: urlBase + "/Accounts/:id/likes/count",
          method: "GET"
        },

        // INTERNAL. Use Category.posts.findById() instead.
        "::findById::Category::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/posts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.posts.destroyById() instead.
        "::destroyById::Category::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/posts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.posts.updateById() instead.
        "::updateById::Category::posts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/posts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.posts() instead.
        "::get::Category::posts": {
          isArray: true,
          url: urlBase + "/Categories/:id/posts",
          method: "GET"
        },

        // INTERNAL. Use Category.posts.create() instead.
        "::create::Category::posts": {
          url: urlBase + "/Categories/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Category.posts.createMany() instead.
        "::createMany::Category::posts": {
          isArray: true,
          url: urlBase + "/Categories/:id/posts",
          method: "POST"
        },

        // INTERNAL. Use Category.posts.destroyAll() instead.
        "::delete::Category::posts": {
          url: urlBase + "/Categories/:id/posts",
          method: "DELETE"
        },

        // INTERNAL. Use Category.posts.count() instead.
        "::count::Category::posts": {
          url: urlBase + "/Categories/:id/posts/count",
          method: "GET"
        },

        // INTERNAL. Use Answer.question() instead.
        "::get::Answer::question": {
          url: urlBase + "/Answers/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Answer.answer() instead.
        "::get::Answer::answer": {
          url: urlBase + "/Answers/:id/answer",
          method: "GET"
        },

        // INTERNAL. Use Comment.answer() instead.
        "::get::Comment::answer": {
          url: urlBase + "/Comments/:id/answer",
          method: "GET"
        },

        // INTERNAL. Use Comment.comment() instead.
        "::get::Comment::comment": {
          url: urlBase + "/Comments/:id/comment",
          method: "GET"
        },

        // INTERNAL. Use Like.post() instead.
        "::get::Like::post": {
          url: urlBase + "/Likes/:id/post",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Post#updateOrCreate
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Post#update
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Post#destroyById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Post#removeById
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Post#modelName
    * @propertyOf lbServices.Post
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Post`.
    */
    R.modelName = "Post";


        /**
         * @ngdoc method
         * @name lbServices.Post#category
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Fetches belongsTo relation category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Post::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post#account
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Fetches belongsTo relation account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.account = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Post::account"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Post.question
     * @header lbServices.Post.question
     * @object
     * @description
     *
     * The object `Post.question` groups methods
     * manipulating `Question` instances related to `Post`.
     *
     * Call {@link lbServices.Post#question Post.question()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Post#question
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Queries question of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#count
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Counts question of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.question.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#create
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Creates a new instance in question of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#createMany
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Creates a new instance in question of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.createMany = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::createMany::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#destroyAll
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Deletes all question of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.question.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#destroyById
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Delete a related item by id for question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.question.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#exists
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Check the existence of question relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.exists = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::exists::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#findById
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Find a related item by id for question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#link
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Add a related item by id for question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.link = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::link::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#unlink
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Remove the question relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.question.unlink = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::unlink::Post::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.question#updateById
         * @methodOf lbServices.Post.question
         *
         * @description
         *
         * Update a related item by id for question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::Post::question"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Post.answers
     * @header lbServices.Post.answers
     * @object
     * @description
     *
     * The object `Post.answers` groups methods
     * manipulating `Answer` instances related to `Post`.
     *
     * Call {@link lbServices.Post#answers Post.answers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Post#answers
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Queries answers of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#count
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Counts answers of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.answers.count = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::count::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#create
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Creates a new instance in answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.create = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::create::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#createMany
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Creates a new instance in answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.createMany = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::createMany::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#destroyAll
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Deletes all answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyAll = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::delete::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#destroyById
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Delete a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::destroyById::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#exists
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Check the existence of answers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.exists = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::exists::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#findById
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Find a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.findById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::findById::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#link
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Add a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.link = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::link::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#unlink
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Remove the answers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.unlink = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::unlink::Post::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answers#updateById
         * @methodOf lbServices.Post.answers
         *
         * @description
         *
         * Update a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.updateById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::updateById::Post::answers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Post.answer
     * @header lbServices.Post.answer
     * @object
     * @description
     *
     * The object `Post.answer` groups methods
     * manipulating `Answer` instances related to `Post`.
     *
     * Call {@link lbServices.Post#answer Post.answer()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Post#answer
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Queries answer of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#count
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Counts answer of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.answer.count = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::count::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#create
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Creates a new instance in answer of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.create = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::create::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#createMany
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Creates a new instance in answer of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.createMany = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::createMany::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#destroyAll
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Deletes all answer of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answer.destroyAll = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::delete::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#destroyById
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Delete a related item by id for answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answer.destroyById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::destroyById::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#exists
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Check the existence of answer relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.exists = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::exists::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#findById
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Find a related item by id for answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.findById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::findById::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#link
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Add a related item by id for answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.link = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::link::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#unlink
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Remove the answer relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answer.unlink = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::unlink::Post::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.answer#updateById
         * @methodOf lbServices.Post.answer
         *
         * @description
         *
         * Update a related item by id for answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.updateById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::updateById::Post::answer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Post.comments
     * @header lbServices.Post.comments
     * @object
     * @description
     *
     * The object `Post.comments` groups methods
     * manipulating `Comment` instances related to `Post`.
     *
     * Call {@link lbServices.Post#comments Post.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Post#comments
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Queries comments of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::get::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#count
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Counts comments of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::count::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#create
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::create::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#createMany
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::createMany::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#destroyAll
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::delete::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#destroyById
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::destroyById::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#exists
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Check the existence of comments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.exists = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::exists::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#findById
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::findById::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#link
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Add a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.link = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::link::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#unlink
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Remove the comments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.unlink = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::unlink::Post::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.comments#updateById
         * @methodOf lbServices.Post.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::updateById::Post::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Post.likes
     * @header lbServices.Post.likes
     * @object
     * @description
     *
     * The object `Post.likes` groups methods
     * manipulating `Account` instances related to `Post`.
     *
     * Call {@link lbServices.Post#likes Post.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Post#likes
         * @methodOf lbServices.Post
         *
         * @description
         *
         * Queries likes of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#count
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Counts likes of Post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::count::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#create
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.create = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::create::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#createMany
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::createMany::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#destroyAll
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::delete::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#destroyById
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::destroyById::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#exists
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Check the existence of likes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.exists = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::exists::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#findById
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::findById::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#link
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Add a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.link = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::link::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#unlink
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Remove the likes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.unlink = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::unlink::Post::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Post.likes#updateById
         * @methodOf lbServices.Post.likes
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::updateById::Post::likes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Question
 * @header lbServices.Question
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Question` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Question",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Questions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Question.category() instead.
        "prototype$__get__category": {
          url: urlBase + "/Questions/:id/category",
          method: "GET"
        },

        // INTERNAL. Use Question.account() instead.
        "prototype$__get__account": {
          url: urlBase + "/Questions/:id/account",
          method: "GET"
        },

        // INTERNAL. Use Question.question.findById() instead.
        "prototype$__findById__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.question.destroyById() instead.
        "prototype$__destroyById__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.question.updateById() instead.
        "prototype$__updateById__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.question.link() instead.
        "prototype$__link__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.question.unlink() instead.
        "prototype$__unlink__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.question.exists() instead.
        "prototype$__exists__question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.answers.findById() instead.
        "prototype$__findById__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.destroyById() instead.
        "prototype$__destroyById__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.updateById() instead.
        "prototype$__updateById__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answers.link() instead.
        "prototype$__link__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answers.unlink() instead.
        "prototype$__unlink__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.exists() instead.
        "prototype$__exists__answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.answer.findById() instead.
        "prototype$__findById__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.answer.destroyById() instead.
        "prototype$__destroyById__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answer.updateById() instead.
        "prototype$__updateById__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answer.link() instead.
        "prototype$__link__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answer.unlink() instead.
        "prototype$__unlink__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answer.exists() instead.
        "prototype$__exists__answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.comments.findById() instead.
        "prototype$__findById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.comments.destroyById() instead.
        "prototype$__destroyById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.comments.updateById() instead.
        "prototype$__updateById__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.comments.link() instead.
        "prototype$__link__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.comments.unlink() instead.
        "prototype$__unlink__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.comments.exists() instead.
        "prototype$__exists__comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.likes.findById() instead.
        "prototype$__findById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.likes.destroyById() instead.
        "prototype$__destroyById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.likes.updateById() instead.
        "prototype$__updateById__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.likes.link() instead.
        "prototype$__link__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.likes.unlink() instead.
        "prototype$__unlink__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.likes.exists() instead.
        "prototype$__exists__likes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/likes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.question() instead.
        "prototype$__get__question": {
          isArray: true,
          url: urlBase + "/Questions/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Question.question.create() instead.
        "prototype$__create__question": {
          url: urlBase + "/Questions/:id/question",
          method: "POST"
        },

        // INTERNAL. Use Question.question.destroyAll() instead.
        "prototype$__delete__question": {
          url: urlBase + "/Questions/:id/question",
          method: "DELETE"
        },

        // INTERNAL. Use Question.question.count() instead.
        "prototype$__count__question": {
          url: urlBase + "/Questions/:id/question/count",
          method: "GET"
        },

        // INTERNAL. Use Question.answers() instead.
        "prototype$__get__answers": {
          isArray: true,
          url: urlBase + "/Questions/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.create() instead.
        "prototype$__create__answers": {
          url: urlBase + "/Questions/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Question.answers.destroyAll() instead.
        "prototype$__delete__answers": {
          url: urlBase + "/Questions/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.count() instead.
        "prototype$__count__answers": {
          url: urlBase + "/Questions/:id/answers/count",
          method: "GET"
        },

        // INTERNAL. Use Question.answer() instead.
        "prototype$__get__answer": {
          isArray: true,
          url: urlBase + "/Questions/:id/answer",
          method: "GET"
        },

        // INTERNAL. Use Question.answer.create() instead.
        "prototype$__create__answer": {
          url: urlBase + "/Questions/:id/answer",
          method: "POST"
        },

        // INTERNAL. Use Question.answer.destroyAll() instead.
        "prototype$__delete__answer": {
          url: urlBase + "/Questions/:id/answer",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answer.count() instead.
        "prototype$__count__answer": {
          url: urlBase + "/Questions/:id/answer/count",
          method: "GET"
        },

        // INTERNAL. Use Question.comments() instead.
        "prototype$__get__comments": {
          isArray: true,
          url: urlBase + "/Questions/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Question.comments.create() instead.
        "prototype$__create__comments": {
          url: urlBase + "/Questions/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Question.comments.destroyAll() instead.
        "prototype$__delete__comments": {
          url: urlBase + "/Questions/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Question.comments.count() instead.
        "prototype$__count__comments": {
          url: urlBase + "/Questions/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Question.likes() instead.
        "prototype$__get__likes": {
          isArray: true,
          url: urlBase + "/Questions/:id/likes",
          method: "GET"
        },

        // INTERNAL. Use Question.likes.create() instead.
        "prototype$__create__likes": {
          url: urlBase + "/Questions/:id/likes",
          method: "POST"
        },

        // INTERNAL. Use Question.likes.destroyAll() instead.
        "prototype$__delete__likes": {
          url: urlBase + "/Questions/:id/likes",
          method: "DELETE"
        },

        // INTERNAL. Use Question.likes.count() instead.
        "prototype$__count__likes": {
          url: urlBase + "/Questions/:id/likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#create
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Questions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#createMany
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Questions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#upsert
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Questions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#exists
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Questions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#findById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Questions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#find
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Questions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#findOne
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Questions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#updateAll
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Questions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#deleteById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Questions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#count
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Questions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#prototype$updateAttributes
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Questions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Question#createChangeStream
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Questions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Post.question.findById() instead.
        "::findById::Post::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.question.destroyById() instead.
        "::destroyById::Post::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.question.updateById() instead.
        "::updateById::Post::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.question.link() instead.
        "::link::Post::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.question.unlink() instead.
        "::unlink::Post::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.question.exists() instead.
        "::exists::Post::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/question/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.question() instead.
        "::get::Post::question": {
          isArray: true,
          url: urlBase + "/Posts/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Post.question.create() instead.
        "::create::Post::question": {
          url: urlBase + "/Posts/:id/question",
          method: "POST"
        },

        // INTERNAL. Use Post.question.createMany() instead.
        "::createMany::Post::question": {
          isArray: true,
          url: urlBase + "/Posts/:id/question",
          method: "POST"
        },

        // INTERNAL. Use Post.question.destroyAll() instead.
        "::delete::Post::question": {
          url: urlBase + "/Posts/:id/question",
          method: "DELETE"
        },

        // INTERNAL. Use Post.question.count() instead.
        "::count::Post::question": {
          url: urlBase + "/Posts/:id/question/count",
          method: "GET"
        },

        // INTERNAL. Use Question.question.findById() instead.
        "::findById::Question::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.question.destroyById() instead.
        "::destroyById::Question::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.question.updateById() instead.
        "::updateById::Question::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.question.link() instead.
        "::link::Question::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.question.unlink() instead.
        "::unlink::Question::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.question.exists() instead.
        "::exists::Question::question": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/question/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.question() instead.
        "::get::Question::question": {
          isArray: true,
          url: urlBase + "/Questions/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Question.question.create() instead.
        "::create::Question::question": {
          url: urlBase + "/Questions/:id/question",
          method: "POST"
        },

        // INTERNAL. Use Question.question.createMany() instead.
        "::createMany::Question::question": {
          isArray: true,
          url: urlBase + "/Questions/:id/question",
          method: "POST"
        },

        // INTERNAL. Use Question.question.destroyAll() instead.
        "::delete::Question::question": {
          url: urlBase + "/Questions/:id/question",
          method: "DELETE"
        },

        // INTERNAL. Use Question.question.count() instead.
        "::count::Question::question": {
          url: urlBase + "/Questions/:id/question/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Question#updateOrCreate
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Question#update
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Question#destroyById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Question#removeById
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Question#modelName
    * @propertyOf lbServices.Question
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Question`.
    */
    R.modelName = "Question";


        /**
         * @ngdoc method
         * @name lbServices.Question#category
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Fetches belongsTo relation category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Question::category"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question#account
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Fetches belongsTo relation account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.account = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Question::account"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.question
     * @header lbServices.Question.question
     * @object
     * @description
     *
     * The object `Question.question` groups methods
     * manipulating `Question` instances related to `Question`.
     *
     * Call {@link lbServices.Question#question Question.question()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Question#question
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Queries question of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::get::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#count
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Counts question of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.question.count = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::count::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#create
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Creates a new instance in question of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.create = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::create::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#createMany
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Creates a new instance in question of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.createMany = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::createMany::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#destroyAll
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Deletes all question of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.question.destroyAll = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::delete::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#destroyById
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Delete a related item by id for question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.question.destroyById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::destroyById::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#exists
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Check the existence of question relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.exists = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::exists::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#findById
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Find a related item by id for question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.findById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::findById::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#link
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Add a related item by id for question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.link = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::link::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#unlink
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Remove the question relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.question.unlink = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::unlink::Question::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.question#updateById
         * @methodOf lbServices.Question.question
         *
         * @description
         *
         * Update a related item by id for question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for question
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Question` object.)
         * </em>
         */
        R.question.updateById = function() {
          var TargetResource = $injector.get("Question");
          var action = TargetResource["::updateById::Question::question"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.answers
     * @header lbServices.Question.answers
     * @object
     * @description
     *
     * The object `Question.answers` groups methods
     * manipulating `Answer` instances related to `Question`.
     *
     * Call {@link lbServices.Question#answers Question.answers()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Question#answers
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Queries answers of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#count
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Counts answers of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.answers.count = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::count::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#create
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Creates a new instance in answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.create = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::create::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#createMany
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Creates a new instance in answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.createMany = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::createMany::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#destroyAll
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Deletes all answers of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyAll = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::delete::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#destroyById
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Delete a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.destroyById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::destroyById::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#exists
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Check the existence of answers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.exists = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::exists::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#findById
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Find a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.findById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::findById::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#link
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Add a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.link = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::link::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#unlink
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Remove the answers relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answers.unlink = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::unlink::Question::answers"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answers#updateById
         * @methodOf lbServices.Question.answers
         *
         * @description
         *
         * Update a related item by id for answers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answers
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answers.updateById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::updateById::Question::answers"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.answer
     * @header lbServices.Question.answer
     * @object
     * @description
     *
     * The object `Question.answer` groups methods
     * manipulating `Answer` instances related to `Question`.
     *
     * Call {@link lbServices.Question#answer Question.answer()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Question#answer
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Queries answer of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::get::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#count
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Counts answer of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.answer.count = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::count::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#create
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Creates a new instance in answer of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.create = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::create::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#createMany
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Creates a new instance in answer of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.createMany = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::createMany::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#destroyAll
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Deletes all answer of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answer.destroyAll = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::delete::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#destroyById
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Delete a related item by id for answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answer.destroyById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::destroyById::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#exists
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Check the existence of answer relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.exists = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::exists::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#findById
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Find a related item by id for answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.findById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::findById::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#link
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Add a related item by id for answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.link = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::link::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#unlink
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Remove the answer relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.answer.unlink = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::unlink::Question::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.answer#updateById
         * @methodOf lbServices.Question.answer
         *
         * @description
         *
         * Update a related item by id for answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for answer
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R.answer.updateById = function() {
          var TargetResource = $injector.get("Answer");
          var action = TargetResource["::updateById::Question::answer"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.comments
     * @header lbServices.Question.comments
     * @object
     * @description
     *
     * The object `Question.comments` groups methods
     * manipulating `Comment` instances related to `Question`.
     *
     * Call {@link lbServices.Question#comments Question.comments()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Question#comments
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Queries comments of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::get::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#count
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Counts comments of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.comments.count = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::count::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#create
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.create = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::create::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#createMany
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Creates a new instance in comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.createMany = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::createMany::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#destroyAll
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Deletes all comments of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyAll = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::delete::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#destroyById
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Delete a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.destroyById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::destroyById::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#exists
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Check the existence of comments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.exists = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::exists::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#findById
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Find a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.findById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::findById::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#link
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Add a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.link = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::link::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#unlink
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Remove the comments relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.comments.unlink = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::unlink::Question::comments"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.comments#updateById
         * @methodOf lbServices.Question.comments
         *
         * @description
         *
         * Update a related item by id for comments.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for comments
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R.comments.updateById = function() {
          var TargetResource = $injector.get("Comment");
          var action = TargetResource["::updateById::Question::comments"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Question.likes
     * @header lbServices.Question.likes
     * @object
     * @description
     *
     * The object `Question.likes` groups methods
     * manipulating `Account` instances related to `Question`.
     *
     * Call {@link lbServices.Question#likes Question.likes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Question#likes
         * @methodOf lbServices.Question
         *
         * @description
         *
         * Queries likes of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `filter` – `{object=}` - 
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#count
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Counts likes of Question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        R.likes.count = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::count::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#create
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.create = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::create::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#createMany
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Creates a new instance in likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.createMany = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::createMany::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#destroyAll
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Deletes all likes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyAll = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::delete::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#destroyById
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Delete a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.destroyById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::destroyById::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#exists
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Check the existence of likes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.exists = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::exists::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#findById
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Find a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.findById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::findById::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#link
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Add a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.link = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::link::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#unlink
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Remove the likes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.likes.unlink = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::unlink::Question::likes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Question.likes#updateById
         * @methodOf lbServices.Question.likes
         *
         * @description
         *
         * Update a related item by id for likes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Post id
         *
         *  - `fk` – `{*}` - Foreign key for likes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.likes.updateById = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::updateById::Question::likes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Answer
 * @header lbServices.Answer
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Answer` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Answer",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Answers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Answer.question() instead.
        "prototype$__get__question": {
          url: urlBase + "/Answers/:id/question",
          method: "GET"
        },

        // INTERNAL. Use Answer.answer() instead.
        "prototype$__get__answer": {
          url: urlBase + "/Answers/:id/answer",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#create
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Answers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#createMany
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Answers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#upsert
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Answers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#exists
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Answers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#findById
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Answers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#find
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Answers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#findOne
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Answers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#updateAll
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Answers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#deleteById
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Answers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#count
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Answers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#prototype$updateAttributes
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Answers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Answer#createChangeStream
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Answers/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Post.answers.findById() instead.
        "::findById::Post::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.answers.destroyById() instead.
        "::destroyById::Post::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answers.updateById() instead.
        "::updateById::Post::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.answers.link() instead.
        "::link::Post::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.answers.unlink() instead.
        "::unlink::Post::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answers.exists() instead.
        "::exists::Post::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.answer.findById() instead.
        "::findById::Post::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.answer.destroyById() instead.
        "::destroyById::Post::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answer.updateById() instead.
        "::updateById::Post::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.answer.link() instead.
        "::link::Post::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.answer.unlink() instead.
        "::unlink::Post::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answer.exists() instead.
        "::exists::Post::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/answer/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.answers() instead.
        "::get::Post::answers": {
          isArray: true,
          url: urlBase + "/Posts/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Post.answers.create() instead.
        "::create::Post::answers": {
          url: urlBase + "/Posts/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Post.answers.createMany() instead.
        "::createMany::Post::answers": {
          isArray: true,
          url: urlBase + "/Posts/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Post.answers.destroyAll() instead.
        "::delete::Post::answers": {
          url: urlBase + "/Posts/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answers.count() instead.
        "::count::Post::answers": {
          url: urlBase + "/Posts/:id/answers/count",
          method: "GET"
        },

        // INTERNAL. Use Post.answer() instead.
        "::get::Post::answer": {
          isArray: true,
          url: urlBase + "/Posts/:id/answer",
          method: "GET"
        },

        // INTERNAL. Use Post.answer.create() instead.
        "::create::Post::answer": {
          url: urlBase + "/Posts/:id/answer",
          method: "POST"
        },

        // INTERNAL. Use Post.answer.createMany() instead.
        "::createMany::Post::answer": {
          isArray: true,
          url: urlBase + "/Posts/:id/answer",
          method: "POST"
        },

        // INTERNAL. Use Post.answer.destroyAll() instead.
        "::delete::Post::answer": {
          url: urlBase + "/Posts/:id/answer",
          method: "DELETE"
        },

        // INTERNAL. Use Post.answer.count() instead.
        "::count::Post::answer": {
          url: urlBase + "/Posts/:id/answer/count",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.findById() instead.
        "::findById::Question::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.destroyById() instead.
        "::destroyById::Question::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.updateById() instead.
        "::updateById::Question::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answers.link() instead.
        "::link::Question::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answers.unlink() instead.
        "::unlink::Question::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.exists() instead.
        "::exists::Question::answers": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answers/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.answer.findById() instead.
        "::findById::Question::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.answer.destroyById() instead.
        "::destroyById::Question::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answer.updateById() instead.
        "::updateById::Question::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answer.link() instead.
        "::link::Question::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.answer.unlink() instead.
        "::unlink::Question::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answer.exists() instead.
        "::exists::Question::answer": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/answer/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.answers() instead.
        "::get::Question::answers": {
          isArray: true,
          url: urlBase + "/Questions/:id/answers",
          method: "GET"
        },

        // INTERNAL. Use Question.answers.create() instead.
        "::create::Question::answers": {
          url: urlBase + "/Questions/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Question.answers.createMany() instead.
        "::createMany::Question::answers": {
          isArray: true,
          url: urlBase + "/Questions/:id/answers",
          method: "POST"
        },

        // INTERNAL. Use Question.answers.destroyAll() instead.
        "::delete::Question::answers": {
          url: urlBase + "/Questions/:id/answers",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answers.count() instead.
        "::count::Question::answers": {
          url: urlBase + "/Questions/:id/answers/count",
          method: "GET"
        },

        // INTERNAL. Use Question.answer() instead.
        "::get::Question::answer": {
          isArray: true,
          url: urlBase + "/Questions/:id/answer",
          method: "GET"
        },

        // INTERNAL. Use Question.answer.create() instead.
        "::create::Question::answer": {
          url: urlBase + "/Questions/:id/answer",
          method: "POST"
        },

        // INTERNAL. Use Question.answer.createMany() instead.
        "::createMany::Question::answer": {
          isArray: true,
          url: urlBase + "/Questions/:id/answer",
          method: "POST"
        },

        // INTERNAL. Use Question.answer.destroyAll() instead.
        "::delete::Question::answer": {
          url: urlBase + "/Questions/:id/answer",
          method: "DELETE"
        },

        // INTERNAL. Use Question.answer.count() instead.
        "::count::Question::answer": {
          url: urlBase + "/Questions/:id/answer/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Answer#updateOrCreate
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Answer` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Answer#update
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Answer#destroyById
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Answer#removeById
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Answer#modelName
    * @propertyOf lbServices.Answer
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Answer`.
    */
    R.modelName = "Answer";


        /**
         * @ngdoc method
         * @name lbServices.Answer#question
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Fetches belongsTo relation question.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.question = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Answer::question"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Answer#answer
         * @methodOf lbServices.Answer
         *
         * @description
         *
         * Fetches belongsTo relation answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.answer = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Answer::answer"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Comment
 * @header lbServices.Comment
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Comment` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Comment",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Comments/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Comment.answer() instead.
        "prototype$__get__answer": {
          url: urlBase + "/Comments/:id/answer",
          method: "GET"
        },

        // INTERNAL. Use Comment.comment() instead.
        "prototype$__get__comment": {
          url: urlBase + "/Comments/:id/comment",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#create
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#createMany
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Comments",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#upsert
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Comments",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#exists
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Comments/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#findById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Comments/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#find
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Comments",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#findOne
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Comments/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#updateAll
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Comments/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#deleteById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Comments/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#count
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Comments/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#prototype$updateAttributes
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Comments/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Comment#createChangeStream
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Comments/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Post.comments.findById() instead.
        "::findById::Post::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.destroyById() instead.
        "::destroyById::Post::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.updateById() instead.
        "::updateById::Post::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.comments.link() instead.
        "::link::Post::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Post.comments.unlink() instead.
        "::unlink::Post::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.exists() instead.
        "::exists::Post::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Posts/:id/comments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Post.comments() instead.
        "::get::Post::comments": {
          isArray: true,
          url: urlBase + "/Posts/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Post.comments.create() instead.
        "::create::Post::comments": {
          url: urlBase + "/Posts/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Post.comments.createMany() instead.
        "::createMany::Post::comments": {
          isArray: true,
          url: urlBase + "/Posts/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Post.comments.destroyAll() instead.
        "::delete::Post::comments": {
          url: urlBase + "/Posts/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Post.comments.count() instead.
        "::count::Post::comments": {
          url: urlBase + "/Posts/:id/comments/count",
          method: "GET"
        },

        // INTERNAL. Use Question.comments.findById() instead.
        "::findById::Question::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/:fk",
          method: "GET"
        },

        // INTERNAL. Use Question.comments.destroyById() instead.
        "::destroyById::Question::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.comments.updateById() instead.
        "::updateById::Question::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.comments.link() instead.
        "::link::Question::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Question.comments.unlink() instead.
        "::unlink::Question::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Question.comments.exists() instead.
        "::exists::Question::comments": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Questions/:id/comments/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Question.comments() instead.
        "::get::Question::comments": {
          isArray: true,
          url: urlBase + "/Questions/:id/comments",
          method: "GET"
        },

        // INTERNAL. Use Question.comments.create() instead.
        "::create::Question::comments": {
          url: urlBase + "/Questions/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Question.comments.createMany() instead.
        "::createMany::Question::comments": {
          isArray: true,
          url: urlBase + "/Questions/:id/comments",
          method: "POST"
        },

        // INTERNAL. Use Question.comments.destroyAll() instead.
        "::delete::Question::comments": {
          url: urlBase + "/Questions/:id/comments",
          method: "DELETE"
        },

        // INTERNAL. Use Question.comments.count() instead.
        "::count::Question::comments": {
          url: urlBase + "/Questions/:id/comments/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Comment#updateOrCreate
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Comment` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Comment#update
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Comment#destroyById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Comment#removeById
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Comment#modelName
    * @propertyOf lbServices.Comment
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Comment`.
    */
    R.modelName = "Comment";


        /**
         * @ngdoc method
         * @name lbServices.Comment#answer
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation answer.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.answer = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Comment::answer"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Comment#comment
         * @methodOf lbServices.Comment
         *
         * @description
         *
         * Fetches belongsTo relation comment.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.comment = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Comment::comment"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Follow
 * @header lbServices.Follow
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Follow` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Follow",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Follows/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Follow.follower() instead.
        "prototype$__get__follower": {
          url: urlBase + "/Follows/:id/follower",
          method: "GET"
        },

        // INTERNAL. Use Follow.followee() instead.
        "prototype$__get__followee": {
          url: urlBase + "/Follows/:id/followee",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#create
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Follow` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Follows",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#createMany
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Follow` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Follows",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#upsert
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Follow` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Follows",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#exists
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Follows/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#findById
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Follow` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Follows/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#find
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Follow` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Follows",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#findOne
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Follow` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Follows/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#updateAll
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Follows/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#deleteById
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Follows/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#count
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Follows/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#prototype$updateAttributes
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Follow` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Follows/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Follow#createChangeStream
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Follows/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Follow#updateOrCreate
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Follow` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Follow#update
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Follow#destroyById
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Follow#removeById
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Follow#modelName
    * @propertyOf lbServices.Follow
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Follow`.
    */
    R.modelName = "Follow";


        /**
         * @ngdoc method
         * @name lbServices.Follow#follower
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Fetches belongsTo relation follower.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.follower = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Follow::follower"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Follow#followee
         * @methodOf lbServices.Follow
         *
         * @description
         *
         * Fetches belongsTo relation followee.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.followee = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Follow::followee"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Interest
 * @header lbServices.Interest
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Interest` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Interest",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Interests/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Interest.account() instead.
        "prototype$__get__account": {
          url: urlBase + "/Interests/:id/account",
          method: "GET"
        },

        // INTERNAL. Use Interest.category() instead.
        "prototype$__get__category": {
          url: urlBase + "/Interests/:id/category",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#create
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Interest` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Interests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#createMany
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Interest` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Interests",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#upsert
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Interest` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Interests",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#exists
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Interests/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#findById
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Interest` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Interests/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#find
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Interest` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Interests",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#findOne
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Interest` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Interests/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#updateAll
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Interests/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#deleteById
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Interests/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#count
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Interests/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#prototype$updateAttributes
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Interest` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Interests/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Interest#createChangeStream
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Interests/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Interest#updateOrCreate
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Interest` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Interest#update
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Interest#destroyById
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Interest#removeById
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Interest#modelName
    * @propertyOf lbServices.Interest
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Interest`.
    */
    R.modelName = "Interest";


        /**
         * @ngdoc method
         * @name lbServices.Interest#account
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Fetches belongsTo relation account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.account = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Interest::account"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Interest#category
         * @methodOf lbServices.Interest
         *
         * @description
         *
         * Fetches belongsTo relation category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.category = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Interest::category"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Like
 * @header lbServices.Like
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Like` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Like",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Likes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Like.post() instead.
        "prototype$__get__post": {
          url: urlBase + "/Likes/:id/post",
          method: "GET"
        },

        // INTERNAL. Use Like.account() instead.
        "prototype$__get__account": {
          url: urlBase + "/Likes/:id/account",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#create
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Likes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#createMany
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Likes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#upsert
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Likes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#exists
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` - 
         */
        "exists": {
          url: urlBase + "/Likes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#findById
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Likes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#find
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Likes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#findOne
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Likes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#updateAll
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "updateAll": {
          url: urlBase + "/Likes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#deleteById
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "deleteById": {
          url: urlBase + "/Likes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#count
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` - 
         */
        "count": {
          url: urlBase + "/Likes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#prototype$updateAttributes
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Likes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#createChangeStream
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` - 
         */
        "createChangeStream": {
          url: urlBase + "/Likes/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#likeCounterMethod
         * @methodOf lbServices.Like
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `postId` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `likeNum` – `{number=}` - 
         */
        "likeCounterMethod": {
          url: urlBase + "/Likes/likeCounter",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#dislikeCounterMethod
         * @methodOf lbServices.Like
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `postId` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `dislikeNum` – `{number=}` - 
         */
        "dislikeCounterMethod": {
          url: urlBase + "/Likes/dislikeCounter",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#likeAccountsMethod
         * @methodOf lbServices.Like
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `postId` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `accounts` – `{*=}` - 
         */
        "likeAccountsMethod": {
          url: urlBase + "/Likes/likeAccounts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Like#dislikeAccountsMethod
         * @methodOf lbServices.Like
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `postId` – `{string}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `accounts` – `{*=}` - 
         */
        "dislikeAccountsMethod": {
          url: urlBase + "/Likes/dislikeAccounts",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Like#updateOrCreate
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Like` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Like#update
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Like#destroyById
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Like#removeById
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Like#modelName
    * @propertyOf lbServices.Like
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Like`.
    */
    R.modelName = "Like";


        /**
         * @ngdoc method
         * @name lbServices.Like#post
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Fetches belongsTo relation post.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Post` object.)
         * </em>
         */
        R.post = function() {
          var TargetResource = $injector.get("Post");
          var action = TargetResource["::get::Like::post"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Like#account
         * @methodOf lbServices.Like
         *
         * @description
         *
         * Fetches belongsTo relation account.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` - 
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Account` object.)
         * </em>
         */
        R.account = function() {
          var TargetResource = $injector.get("Account");
          var action = TargetResource["::get::Like::account"];
          return action.apply(R, arguments);
        };

    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
