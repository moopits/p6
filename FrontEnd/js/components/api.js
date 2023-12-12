
const CATEGORIES_URL = 'http://localhost:5678/api/categories'

const WORK_URL = 'http://localhost:5678/api/works'

/*fetch(url)
  .then((response) => response.json())
  .then((data) => console.log(data))*/

  fetch(CATEGORIES_URL) /* url */
  .then((response) => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Erreur de requête");
    }
  })
  .then((data) => console.log(data));


export const getWorks = () => fetch(WORK_URL).then(data => data.json())


fetch(WORK_URL) /* url */
.then((response) => {
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error("Erreur de requête");
  }
})
.then((data) => console.log(data));
