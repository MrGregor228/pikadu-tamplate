let menuToggle = document.querySelector('#menu-toggle'),
  menu = document.querySelector('.sidebar');

menuToggle.addEventListener('click', function (event) {
  event.preventDefault();
  menu.classList.toggle('visible');
});

const loginElem = document.querySelector('.login'),
  loginForm = document.querySelector('.login-form'),
  emailInput = document.querySelector('.login-email'),
  passwordInput = document.querySelector('.login-password'),
  loginSignup = document.querySelector('.login-signup'),

  userElem = document.querySelector('.user'),
  userNameElem = document.querySelector('.user-name'),

  listUsers = [{
      id: "01",
      email: "kadaner.grisha@gmail.com",
      password: '12345',
      displayName: "MrGregor_228"
    },
    {
      id: "02",
      email: "jankadaner@gmail.com",
      password: '12345',
      displayName: "Jeugen1980"
    }
  ],
  setUsers = {
    user: null,
    logIn(email, password, handler) {
      const user = this.getUser(email);
      if (user && user.password === password) {
        this.authorizedUser(user);
        handler();
      } else {
        alert('Ползователь с такими данными не найден');
      }
    },
    logOut() {
      console.log("Out");
    },
    singUp(email, password, handler) {
      if (!this.getUser(email)) {
        const user = {email, password, displayName: email};
        listUsers.push(user);
        this.authorizedUser(user);
        handler(); 
      } else {
        alert('Пользователь с таким Email уже зарегестрирован!');
      }
    },
    getUser(email) {
      console.log(listUsers);
      return listUsers.find(item => item.email === email);
      
    },
    authorizedUser(user) {
      this.user = user;
    }
  },

  toggleAuthDom = () => {
    const user = setUsers.user;
    console.log('user: ', user);
    if (user) {
      loginElem.style.display = 'none';
      userElem.style.display = '';
      userNmaeElem = user.displayName;
    } else {
      loginElem.style.display = '';
      userElem.style.display = 'none';
    }
  };

loginForm.addEventListener('submit', event => {
  event.preventDefault();
  const emailValue = emailInput.value,
    passwordValue = passwordInput.value;
  setUsers.logIn(emailValue, passwordValue, toggleAuthDom);
});

loginSignup.addEventListener('click', event => {
  event.preventDefault();
  const emailValue = emailInput.value,
    passwordValue = passwordInput.value;
  setUsers.singUp(emailValue, passwordValue, toggleAuthDom);
});

toggleAuthDom();