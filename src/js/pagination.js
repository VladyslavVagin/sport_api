// @ts-nocheck
import Pagination from 'tui-pagination';
import { getCardsFromApi } from './api_sport';
import { markupCards } from './api_sport';
import { genereateCards } from './api_sport';

const container = document.getElementById('tui-pagination-container');
const allCards = document.querySelector('.list-all-cards');

let limit = 12;
if (window.innerWidth < 768) {
  limit = 9;
}

export function setPagination (totalPages = 1, page) {
    const pagination = new Pagination(container, {
      totalItems: totalPages * limit,
      itemsPerPage: limit,
      visiblePages: 3,
      page: page,
    });

    if (!(allCards.dataset.page === 'cards')) {

        pagination.on('afterMove', (event) => {
        const currentPage = event.page;
        const queryValue = allCards.dataset.query;
        const filterValue = allCards.dataset.filter;

        genereateCards(queryValue, filterValue, currentPage);
      });
      return;
    }

    pagination.on('afterMove', (event) => {
      const currentPage = event.page;
      const query = document.querySelector('.current').dataset.filter;
      markupCards(query, currentPage);
    })
};

