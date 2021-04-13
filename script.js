const $displayTime = document.getElementById('display-time')
const $setting = document.getElementById('setting')
const $more = document.getElementById('more')


//RETRIEVE AND DISPLAY CURRENT NASA APOD
fetch('https://api.nasa.gov/planetary/apod?api_key=EyHo5aUBuqgCzxSgckXpv6DkbApqFEzwtQzMmfvY')

.then(function(response){
    return response.json()
})
.then(function(imageData){
    if(imageData.media_type==='video'){
        document.querySelector('p').textContent='its a video, display another image'
        //https://unsplash.com/photos/oMpAz-DN-9I
    } else {
        document.querySelector('img').setAttribute('src',imageData.url)
        // document.querySelector('p').textContent=imageData.explanation
    }
})


//CLOCK DISPLAY SETTINGS
//GREETING
const input = []
input.push(`
    <h1>HELLO! IT'S CURRENTLY</h1>
    <div id="clock" class="clock"></div>
    <div id="date" class="date"></div>
`)

$displayTime.innerHTML=input.join('')


//CLOCK 
setInterval(showTime, 1000);
function showTime() {
    let time = new Date()
    let hour = time.getHours()
    let min = String(time.getMinutes()).padStart(2,"0")
    let sec = String(time.getSeconds()).padStart(2,"0")
    let currentTime = ''
    let currentDate = ''

    console.log(document.getElementById('seconds').checked)
    if(document.getElementById('seconds').checked){
        currentTime = hour + ":" + min + ":" + sec
    }
    else {
        console.log("showTime")
        currentTime = hour + ":" + min
    }
  
    document.getElementById("clock").innerHTML = currentTime
    console.log(new Date())
    if(document.getElementById('yes-date').checked){
        currentDate = new Date().toDateString()
    }

    document.getElementById("date").innerHTML = currentDate    
}



//SETTING BUTTON
const input_a = []
input_a.push(`
    <button id="setting-button">SETTING</button>
    <div id="create-form"></div>
`)
$setting.innerHTML=input_a.join('')

const $createForm = document.getElementById('create-form')
const input_setting_btn = []
input_setting_btn.push(`
    <form id="form-setting">
        <h1>SETTINGS</h1>
        <div id="setting-section">
            <div id="show-seconds">
                <h2>SHOW SECONDS</h2>
                <input type="radio" name="answer-seconds" id="seconds">
                <label for="yes">Yes</label><br>
                <input type="radio" name="answer-seconds" checked>
                <label for="no">No</label><br>
            </div>
            <div id="show-date">
                <h2>SHOW DATE</h2>
                <input type="radio" name="answer-date" id="yes-date">
                <label for="yes">Yes</label><br>
                <input type="radio" name="answer-date" checked>
                <label for="no">No</label><br>
            </div>
        </div>
        <button id="save-setting">CLOSE</button>
    </form>
`)
$createForm.innerHTML=input_setting_btn.join('')
$createForm.classList.add('hide')

showTime()

const $settingButton = document.getElementById('setting-button')
$settingButton.addEventListener('click', function(e){

    $settingButton.classList.add('hide')
    $createForm.classList.remove('hide')

    const $settingForm = document.getElementById('form-setting')
    const $saveSettingButton = document.getElementById('save-setting')
    // const $hideSetting = document.getElementById('hide-setting')
    $saveSettingButton.addEventListener('click', function(a){
        a.preventDefault()
        showTime()
        $createForm.classList.add('hide')
        $settingButton.classList.remove('hide')
    })
})



//MORE BUTTON
const input_b = []
input_b.push(`
    <button id="more-button">MORE</button>
    <div id="more-options" class="hide"></div>
`)
$more.innerHTML=input_b.join('')

const $moreButton = document.getElementById('more-button')
const $moreOptions = document.getElementById('more-options')

$moreButton.addEventListener('click', function(b){
    const input_more_btn = []
    input_more_btn.push(`
        <div id="more-section">
            <div>
                <h1>DAY OF THE WEEK</h1>
                <div id="day-of-week"></div>
            </div>
            <div>
                <h1>DAY OF THE MONTH</h1>
                <div id="day-of-month"></div>
            </div>
            <div>
                <h1>DAY OF THE YEAR</h1>
                <div id="day-of-year"></div>
            </div>
            <div>
                <h1>WEEK OF THE YEAR</h1>
                <div id="week-of-year"></div>
            </div>
        </div>
        <button id="close">CLOSE</button>
    `)

    $moreOptions.innerHTML=input_more_btn.join('')
    
    
    $moreButton.classList.add('hide')
    $moreOptions.classList.remove('hide')

    const $dayOfWeek = document.getElementById('day-of-week')
    const $dayOfMonth = document.getElementById('day-of-month')
    const $dayOfYear = document.getElementById('day-of-year')
    const $weekOfYear = document.getElementById('week-of-year')

    //DAY OF WEEK
    function showDay() {
        let d = new Date()
        let weekday = new Array(7)
        weekday[0] = "Sunday"
        weekday[1] = "Monday"
        weekday[2] = "Tuesday"
        weekday[3] = "Wednesday"
        weekday[4] = "Thursday"
        weekday[5] = "Friday"
        weekday[6] = "Saturday"
        let day = weekday[d.getDay()]
        let currentDay = day
        document.getElementById("day-of-week").innerHTML = currentDay
    }
    showDay()

    //DAY OF MONTH
    function showMonth() {
        let d = new Date()
        let month = d.getDate()
        let currentMonth = month
        document.getElementById("day-of-month").innerHTML = currentMonth
    }
    showMonth()

    //DAY OF YEAR
    function showYear() {
        const dayOfYear = date => 
        Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
        let currentYear = dayOfYear(new Date())
        document.getElementById("day-of-year").innerHTML = currentYear
    }
    showYear()

    //WEEK OF YEAR
    function showWeek(){
        let d = new Date()
        let x =  new Date(d.getFullYear(), 0, 1)
        let numberOfDays =  Math.floor((d - x) / (24 * 60 * 60 * 1000))
        let result = Math.ceil((d.getDay() + 1 + numberOfDays) / 7) 
        document.getElementById("week-of-year").innerHTML = result
    }
    showWeek()

    //CLOSE BUTTON
    const $close = document.getElementById('close')
    $close.addEventListener('click',function(c){
        $moreButton.classList.remove('hide')
        $moreOptions.classList.add('hide')
    })

})
