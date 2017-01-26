<h2>SETTING UP</h2>

<h3>uses create-react-app boilerplate</h3>

to init the app,
```
 npm run start
```
<br/>

<h2>USE</h2>
<h3>Demo: http://codepen.io/TheEnd/full/qRPajO/ </h3>
<h3>startTime: When you want the Timer to start running and show on the page /optional defaultStartTime:'01/13/2016 00:00:00'</h3>
<h3>endTime: When you want the Timer to stop running and be removed from the DOM /REQUIRED </h3>
<h3>The Timer runs (Active) and shows on the page if ( endTime > currentTime && currentTime >= startTime) where currentTime is new Date();</h3>
<h3>callback: function to run when a particular Timer is Active /optional</h3>
<h3>date & time format ~ MM/DD/YYY HH:MM:SS 24 hrs Format for IE9 support and to avoid using time/date libraries</h3>
<h3>offsetGMT ~ 'GMT+0530' /optional Green Mean Time offset</h3>
<br/>

*Timer counts down to a defined endTime

*You can define when to start showing the Timer by entering a startTime

*You can define a callback to run when a particular Timer starts running
say, hide/show a div/image etc

*If you have defined different timers that start showing one after the other,
they will automatically do
example: say for today,  show #Timer01 from 12:00pm to 14:00pm  and then show #Timer02 from 14:00pm to 16:00pm,  you do not have to update the HTML/JS,
It happens automatically

*set GMT offset(Green Mean Time)
by defining  offsetGMT='GMT+0530' in props
by default, it follows India Standard Time 'GMT+0530'

*Useful especially in timed/scheduled pages/apps ~ ecommerce offer pages, banking etc
