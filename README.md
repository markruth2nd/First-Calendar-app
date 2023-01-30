# First-Calendar-app
Fist calendar web app

 In this project, I am looking to create a simple calendar application that allows any user to save events for each hour of the day by modifying starter code.

 I am going to use the skills I've learned so far by using DOM manipulation, advanced JavaScript, integration of third-party APIs, possibly more. This app will run in the browser and feature dynamically updated HTML, CSS using jQuery. Ill also use the Moment.js Links to an external site.library to work with date and time.

 First off I'll create and organise required files such as my CSS, HTML & Javascript file alays ensuring my index.html is at the root of all files and then add link to JS file and amend link to CSS file.

 **I NEED TO DOUBLE CHECK THAT ALL CLASSES MATCH ALL FILE SUCH AS JS, CSS & HTML DOCS

 In my HTML document, within the <div> "container"I will add each hourly section with a text area as well as a save button. These will also include column sizes for each section.
 " <section id="hour-0" class="row time-block">
        <section class="col-md-2 hour">
          Today, 4 AM
        </section>
        <textarea class="col-md-9 description"></textarea>
        <button class="btn saveBtn col-md-1"><i class="fas fa-save"></i></button>
      </section> "
I will then duplicate the above to total 18 hours of my 24 hour day. I will add an additional section above the 18 hours with the title "Appointment added to localstorage".

