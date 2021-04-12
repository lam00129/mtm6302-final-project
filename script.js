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
`)

$displayTime.innerHTML=input.join('')


//CLOCK 
setInterval(showTime, 1000);
function showTime() {
    let time = new Date()
    let hour = time.getHours()
    let min = time.getMinutes()
    // let sec = time.getSeconds()
    // am_pm = " AM";
  
    // if (hour > 12) {
    //     hour -= 12
    //     am_pm = " PM"
    // }
    // if (hour == 0) {
    //     hr = 12
    //     am_pm = "AM"
    // }
  
    let currentTime = hour + ":" + min 
            // + ":" + sec 
            // + am_pm
  
    document.getElementById("clock").innerHTML = currentTime
}

showTime()


//SETTING BUTTON
const input_a = []
input_a.push(`
    <button id="setting-button">SETTING</button>
`)
$setting.innerHTML=input_a.join('')

const $settingButton = document.getElementById('setting-button')
$settingButton.addEventListener('click', function(e){
    const input_setting_btn = []
    input_setting_btn.push(`
        <form id="form-setting">
            <h1>SETTINGS</h1>
            <div id="24-hour">24-HOUR CLOCK<br>
                <input type="radio">
                <label for="yes">Yes</label><br>
                <input type="radio">
                <label for="no">No</label><br>
            </div>
            <div id="show-seconds">SHOW SECONDS<br>
                <input type="radio">
                <label for="yes">Yes</label><br>
                <input type="radio">
                <label for="no">No</label><br>
            </div>
            <button id="save-setting">SAVE</button>
        </form>
    `)
    $settingButton.innerHTML=input_setting_btn.join('')

    const $settingForm = document.getElementById('form-setting')

    const $saveSettingButton = document.getElementById('save-setting')
    const $hideSetting = document.getElementById('hide-setting')
    $saveSettingButton.addEventListener('click', function(a){
        a.preventDefault()

        $settingForm.classList.add('hide-setting')

    })
})



//MORE BUTTON
const input_b = []
input_b.push(`
    <button id="more-button">MORE</button>
`)
$more.innerHTML=input_b.join('')

const $moreButton = document.getElementById('more-button')
$moreButton.addEventListener('click', function(b){
    const input_more_btn = []
    input_more_btn.push(`
        <div id="more-options">
            <div id="day-of-week">DAY OF THE WEEK<br>
            </div>
            <div id="day-of-month">DAY OF THE MONTH<br>
            </div>
            <div id="day-of-year">DAY OF THE YEAR<br>
            </div>
        </div>
    `)
    $moreButton.innerHTML=input_more_btn.join('')

    let $dayOfWeek = document.getElementById('day-of-week')
    let $dayOfMonth = document.getElementById('day-of-month')
    let $dayOfYear = document.getElementById('day-of-year')


})
console.log(showTime)