var quotes = [
    'I used to think I was indecisive, but now I\'m not too sure.',
    'Doing nothing is hard, you never know when you\'re done.',
    'If two wrongs don\'t make a right, try three.',
    'I am not lazy, I am on energy saving mode.',
    'Life is short, smile while you still have teeth.',
    'A balanced diet means a cupcake in each hand.',
    'Maybe you should eat some makeup so you can be pretty on the inside too.',
    'I\'m not shy, I\'m holding back my awesomeness so I don\'t intimidate you.',
    'Sorry for the mean, awful, accurate things I said.',
    'I’m sorry, if you were right, I’d agree with you.',
    'Your life can\'t fall apart if you never had it together!',
    'People say nothing is impossible, but I do nothing every day.',
    'A bank is a place that will lend you money if you can prove that you don\'t need it.',
    'If you think nobody cares if you\'re alive, try missing a couple of payments.',
    'Always remember that you\'re unique. Just like everyone else.',
    'The answer you\'re looking for is inside of you, but it\'s wrong',
    'One advantage of talking to yourself is that you know at least somebody\'s listening.',
    'The elevator to success is out of order. You\'ll have to use the stairs.',
    'An apple a day keeps anyone away if you throw it hard enough.',
    'The more you weight the harder you are to kidnap. Stay safe, eat cake.'
];

var michaels = [
    'Michael Ancram',
    'Michael Aspel',
    'Michael Buffer',
    'Michael Caine',
    'Michael Clifford',
    'Michael Crichton',
    'Michael Douglas',
    'Michael Eisner',
    'Michael Epstein',
    'Michael J. Fox',
    'Michael Holton',
    'Michael Hutchence',
    'Michael Jackson',
    'Michael Jordan',
    'Michael Keaton',
    'Michael Knight',
    'Michael Marmot',
    'Michael Moore',
    'Michael Myers',
    'Michael Nesmith',
    'Michael Owen',
    'Michael Palin',
    'Michael Roll',
    'Michael Schumacher',
    'Michael Warren',
    'Michael Wilbon'
];

function randomJoke() {
    var quote = quotes[Math.floor(Math.random() * quotes.length)];
    var michael = michaels[Math.floor(Math.random() * michaels.length)];

    $('#michael-quote').html(
        '<h3 class="text-secondary mb-2">"' + quote + '"</h3>' +
        '<h3 class="text-secondary mb-5">- ' + michael + '</h3>');
}
randomJoke();