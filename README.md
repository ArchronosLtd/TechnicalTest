# [archronos.io](https://archronos.io) - Frontend technical test

This test is a part of our hiring process it should take you between 3 and 6 hours depending on your experience.

## Summary

The goal of this test is to make you code a small AngularJS app. We have prepared a skeleton app for you, but please change whatever you want (Gulpfile, CSS files, HTML structure, JS structure...).

The app will have two different pages:
- **Activity Feed** - simple list of calls
- **Activity Detail** - detail of a call

Show us what you can do in 6 hours top :) Don't spend too much time on designing your app, our design team will hate it anyway.

**Bonus:** the final user should be able to archive a call. The call will no longer be displayed on the Activity Feed. Please code that only if you have extra time.

## Code

In this repository you'll find a simple AngularJS project with three controllers and one model:

- **AppController** - the main controller. You won't have to do anything in this one.
- **ActivitiesController** - the Activity Feed controller. Handles the call list.
- **ActivityDetailController** - the Activity Detail. Handles a specific call actions. Archiving a call can be done here.

Use the dependency you want to fetch data: `$http`, `$resource`...

BTW, we have used [ui-router](https://github.com/angular-ui/ui-router). Hope you know how to use it!

## Installation

You're smart, right? So you shouldn't need any instruction :)


Didn't succeed to install it on your own? Don't waste 20min more, there you go:

```
npm install
gulp
```

## API documentation

### Routes

- **GET** - http://dev.archronos.com/activities: get calls to display in the Activity Feed
- **GET** - http://dev.archronos.com/activities/:id: retrieve a specific call details
- **POST** - http://dev.archronos.com/activities/:id: update a call. The only field updatable is `is_archived (bool)`. You'll need to send a JSON in the request body:

```
{
  is_archived: true
}
```

- **GET** - http://dev.archronos.com/reset: Reset all calls to initial state (usefull if you archived all calls).

### Call object

- **id** - unique ID of call
- **created_at** - creation date
- **direction** - `inbound` or `outbound` call
- **from** - caller's number
- **to** - callee's number
- **via** - `deprecated` Ignore this 
- **duration** - duration of a call (in seconds)
- **is_archived** - call is archived or not
- **call_type** - can be a `missed`, `answered` or `voicemail` call.