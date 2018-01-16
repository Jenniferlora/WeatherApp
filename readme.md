# Ajax Weather!

![](https://media.giphy.com/media/za5xikuRr0OzK/giphy.gif)

Here's an exciting challenge: You'll be building a small weather app, using your newfound skills with APIs!

## Setting up

#### Make sure you follow all of these steps!

For this homework you'll be using your newfound knowledge of Ajax to create a weather app with the [Open Weather API](https://openweathermap.org/api)!!! This API requires you to sign up to get an API key _(this way they can limit how many calls you make to their database)_. Here are the steps to get a key:

1. Sign up for a free [Open Weather Map](https://home.openweathermap.org/users/sign_up) account!
2. Once you've signed up, you're given an [API key](https://home.openweathermap.org/api_keys). Copy that API key and keep track of it somewhere!
3. Open Postman to check out the data you're working with & to verify that your key works. Make a GET requrest to the following URL in postman, adding your API key to the end.

```
http://api.openweathermap.org/data/2.5/weather?q=[ZIP CODE GOES HERE],us?units=imperial&appid=[PUT YOUR API KEY HERE]
```


#### You'll be working in the weather directory, in the `script.js`.

## Assignment

1. **Complete the event listener**
    - When the submit button is clicked, get value of the input.
    - Then invoke the `makeCall()` function with the zip code as an argument.
2. **Fill in the `makeCall()` function**
    - Look at the [Open Weather API Documentation](https://openweathermap.org/current#zip)
    - This function has the zip code as a parameter.
    - It will construct the url you will use for your Ajax call.
      ***HINT:***
      ```
      The url will look something like: http://api.openweathermap.org/data/2.5/weather?q=[ZIP CODE GOES HERE],us?units=imperial&appid=[PUT YOUR API KEY HERE]
      ```
    - Then it will preform an AJAX GET request and invoke `getData()` with the response data.
3. **Finish the `getData()` function**
    - This function will take the response data and grab the following:
        - City name
        - Current temperature
        - Weather description
        - Min temp
        - Max temp
    - It will then pass these as arguments when invoking the `appendToDom()` function.
4. **Complete the `appendToDom()` function**
    - This function will take each of these parameters and create appropriate elements for each.
    - It will then append the elements to the DOM.

**Here are some zip codes to test!**
- 99501 (Anchorage)
- 99723 (Barrow, AK)
- 60605 (Chicago)
- 70124 (New Orleans)
- 77030 (Houston, TX)
- 00902 (San Juan, Puerto Rico)
- 46923 (Delphi, IN)
- 94123 (San Francisco, CA)

## BONUSES!!
- Add the latitude and longitude, humidity, precipitation, and wind speed
- Style your app more! Make it look pretty! Some advanced styling ideas:
    - Have the temperature turn blue if under 40, and red if above 90.
    - Look into the [javascript date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and change the background color based on the time of day.
- Look into [Font Awesome](http://fontawesome.io/) and add icons based on the weather.

## Homework Submission:

* Homework is due at **11PM** tonight!
* [Follow these instructions to submit your assignment](https://git.generalassemb.ly/wdi-jackalope/jackalope-students/blob/master/HOMEWORK.md)
* [If you need help with your homework, check out the Student Resource Center!](https://git.generalassemb.ly/wdi-jackalope/jackalope-students/blob/master/SRC.md)