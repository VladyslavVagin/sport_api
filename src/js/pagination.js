// import { Pagination } from "tui-pagination";

// const paginContainer = document.getElementById('tui-pagination-container');
// const cardsListExerc = document.querySelector('.nav-exercise-item');

// let limit = 12;
// if(window.innerWidth < 768) {
//     limit = 9;
// }

// export function makePagination(totalPages = 1, page) {
//    const pagination = new Pagination(paginContainer, {
//      totalItems: totalPages * limit,
//      itemsPerPage: limit,
//      visiblePages: 3,
//      page: page,
//    })

//    if(!cardsListExerc.dataset.page === "cards") {
//     pagination.on('afterMove', (e) => {
//         const currPage = e.page;
//         const queryValue = cardsListExerc.dataset.query;
//         const filter = cardsListExerc.dataset.filter;
//     })
//    }
// };