const sounds = ['applause', 'boo', 'gasp', 'tada', 'winning', 'wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    document.getElementsById('buttons').
    appendChild(btn)
})