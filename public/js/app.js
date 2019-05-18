Handlebars.registerHelper('incremented', function(index) {
    return parseInt(index)+ 1;    
});

const $searchForm = document.querySelector('#searchForm');
const $repository = document.querySelector('#repository');
const $language = document.querySelector('#language');
const $topic = document.querySelector('#topic');
const $searchButton = document.querySelector('#searchBtn');
const $result = document.querySelector('#result');

$searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    $searchButton.setAttribute('disabled', 'disabled');
    $result.innerHTML = "Searching...";

    let baseUrl = '/search-github?repository=';

    if (!!$repository.value) {
        baseUrl += $repository.value;
    }

    if (!!$language.value) {
        baseUrl += '&language=' + $language.value;
    }

    if (!!$topic.value) {
        baseUrl += '&topic=' + $topic.value;
    }

    fetch(baseUrl).then((response) => {
        response.json().then((data) => {
            var context = { repos: data.result.data.items };
            $result.innerHTML = Handlebars.templates['githubTable'](context);

            $('#githubTable').DataTable({
                columnDefs: [
                    {orderable: false, targets: [1,2] }
                ]
            });
            $searchButton.removeAttribute('disabled');
            console.log(data);
        });
    });
});