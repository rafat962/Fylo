const themeToggleBtn = document.getElementById('theme-toggle')
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon')
const themeTogglelightIcon = document.getElementById('theme-toggle-light-icon')


if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    // Show light icon
    themeTogglelightIcon.classList.remove('hidden')
} else {
    themeToggleDarkIcon.classList.remove('hidden')
}

themeToggleBtn.addEventListener('click',()=>{
    // Toggle icon 
    themeToggleDarkIcon.classList.toggle('hidden')
    themeTogglelightIcon.classList.toggle('hidden')
    if(localStorage.getItem('color-theme')){
        //  if light , make dark and save in local storage
        if(localStorage.getItem('color-theme') === 'light'){
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme','light')
        }
    }else{
        if(document.documentElement.classList.contains('dark')){
            document.documentElement.classList.remove('dark')
            localStorage.setItem('color-theme','light')
        }else{
            document.documentElement.classList.add('dark')
            localStorage.setItem('color-theme','dark')
        }
    }
})



