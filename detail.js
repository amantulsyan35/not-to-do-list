//METHOD 1
// const userName = document.querySelector('#name');
// const userBio = document.querySelector('#bio');
// const nameToShow = document.querySelector('.displayName');
// const welcomeMessage = document.querySelector('.dashboardWelcome');
//METHOD 2
const capture = () => {
  const name = document.querySelector('#name').value;
  const bio = document.querySelector('#bio').value;

  localStorage.setItem('NAME', name);
  localStorage.setItem('BIO', bio);

  return;
};
