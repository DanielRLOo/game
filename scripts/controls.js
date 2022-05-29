// Player movement

const keys = {
  lastKey: '',
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  },
}

window.addEventListener('keydown', (e) => {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 87:
      keys.w.pressed = true;
      keys.lastKey = 'w';
      break;
    case 65:
      keys.a.pressed = true;
      keys.lastKey = 'a';
      break;
    case 83:
      keys.s.pressed = true;
      keys.lastKey = 's';
      break;
    case 68:
      keys.d.pressed = true;
      keys.lastKey = 'd';
      break;
    default:
  }
})

window.addEventListener('keyup', (e) => {
  console.log(e.keyCode);
  switch (e.keyCode) {
    case 87:
      keys.w.pressed = false
      break;
    case 65:
      keys.a.pressed = false
      break;
    case 83:
      keys.s.pressed = false
      break;
    case 68:
      keys.d.pressed = false
      break;
    default:
  }
})
