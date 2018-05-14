function HomePage()
{
  document.getElementById("content").innerHTML = "<embed src='HomeContent.html'>";
  checkActive();
  document.getElementById("home").classList.add("Active");
}

function SearchPage()
{
  document.getElementById("content").innerHTML = "<embed src='Search.html'>";
  checkActive();
  document.getElementById("search").classList.add("Active");
}

function LoginPage()
{
  document.getElementById("content").innerHTML = "<embed src='Login.html'>";
  checkActive();
}

function SignupPage()
{
  document.getElementById("content").innerHTML = "<embed src='Signup.html'>";
  checkActive();
}


function AccountSettingsPage()
{
  document.getElementById("content").innerHTML = "<embed src='AccountSettings.html'>";
  checkActive();
}

function HotelRoomPage()
{
  document.getElementById("content").innerHTML = "<embed src='HotelRoom.html'>";
  checkActive();
}
function checkActive() {
  if(document.getElementById("home").classList.contains("Active")===true) {
    document.getElementById("home").classList.remove("Active");
  }
  if(document.getElementById("search").classList.contains("Active")===true) {
    document.getElementById("search").classList.remove("Active");
  }
}
