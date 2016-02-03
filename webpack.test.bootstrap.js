var context = require.context("./src", true, /\S+\/__test__\/\S+\.js$/);
context.keys().forEach(context);
