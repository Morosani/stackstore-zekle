/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

Refer to the q documentation for why and how q.invoke is used.

*/

var mongoose = require('mongoose');
var connectToDb = require('./server/db');
var User = mongoose.model('User');
var Category = mongoose.model('Category');
var Item = mongoose.model('Item');
var Review = mongoose.model('Review');
var Listing = mongoose.model('Listing');
var q = require('q');
var chalk = require('chalk');

var getCurrentUserData = function() {
    return q.ninvoke(User, 'find', {});
};
var seedUsers = function() {

    var users = [{
        name: {
            first: "Jean",
            last: "Holmes"
        },
        phoneNumber: "3-(672)210-7055",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://soundcloud.com",
        location: {
            lat: 40.707,
            lng: -74
        },
        email: "jholmes0@wikipedia.org",
        password: "arl0IMN"
    }, {
        name: {
            first: "Phillip",
            last: "Turner"
        },
        phoneNumber: "0-(844)144-8187",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://cornell.edu",
        location: {
            lat: 40.708,
            lng: -74.019
        },
        email: "pturner1@spiegel.de",
        password: "pik6mk"
    }, {
        name: {
            first: "Nicole",
            last: "Palmer"
        },
        phoneNumber: "0-(984)656-2198",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://nytimes.com",
        location: {
            lat: 40.701,
            lng: -74.016
        },
        email: "npalmer2@narod.ru",
        password: "63S24ubRsh"
    }, {
        name: {
            first: "Sara",
            last: "Dunn"
        },
        phoneNumber: "9-(082)354-9867",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://artisteer.com",
        location: {
            lat: 40.701,
            lng: -74.002
        },
        email: "sdunn3@free.fr",
        password: "23MdjOU09By2"
    }, {
        name: {
            first: "Sharon",
            last: "Peterson"
        },
        phoneNumber: "9-(810)385-8138",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://domainmarket.com",
        location: {
            lat: 40.705,
            lng: -74.007
        },
        email: "speterson4@vistaprint.com",
        password: "oO1plD4DU"
    }, {
        name: {
            first: "Sandra",
            last: "Hudson"
        },
        phoneNumber: "2-(366)773-7000",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://xinhuanet.com",
        location: {
            lat: 40.704,
            lng: -74.011
        },
        email: "shudson5@blogtalkradio.com",
        password: "BKtwBoX15Tb"
    }, {
        name: {
            first: "Aaron",
            last: "Day"
        },
        phoneNumber: "3-(792)608-6035",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://com.com",
        location: {
            lat: 40.705,
            lng: -74.003
        },
        email: "aday6@icq.com",
        password: "AIXiTqqz15ur"
    }, {
        name: {
            first: "Steven",
            last: "Ray"
        },
        phoneNumber: "7-(889)373-2610",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://163.com",
        location: {
            lat: 40.709,
            lng: -74.003
        },
        email: "sray7@dell.com",
        password: "GcBhvf"
    }, {
        name: {
            first: "Norma",
            last: "Foster"
        },
        phoneNumber: "6-(756)885-2616",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://jugem.jp",
        location: {
            lat: 40.708,
            lng: -74.012
        },
        email: "nfoster8@bluehost.com",
        password: "HEFVavSz"
    }, {
        name: {
            first: "Wanda",
            last: "Jones"
        },
        phoneNumber: "8-(597)564-9793",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://wordpress.org",
        location: {
            lat: 40.7,
            lng: -74.007
        },
        email: "wjones9@globo.com",
        password: "Zmblc92F2"
    }, {
        name: {
            first: "Anna",
            last: "Hamilton"
        },
        phoneNumber: "9-(991)646-0563",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://ihg.com",
        location: {
            lat: 40.7,
            lng: -74.006
        },
        email: "ahamiltona@huffingtonpost.com",
        password: "oohlytTL"
    }, {
        name: {
            first: "Angela",
            last: "Lynch"
        },
        phoneNumber: "2-(624)379-8802",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://people.com.cn",
        location: {
            lat: 40.711,
            lng: -74.007
        },
        email: "alynchb@cnn.com",
        password: "mArltd7f"
    }, {
        name: {
            first: "Paul",
            last: "Marshall"
        },
        phoneNumber: "9-(648)475-9640",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://uiuc.edu",
        location: {
            lat: 40.703,
            lng: -74.016
        },
        email: "pmarshallc@huffingtonpost.com",
        password: "rt83mp8"
    }, {
        name: {
            first: "Benjamin",
            last: "Torres"
        },
        phoneNumber: "7-(435)236-1690",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://skype.com",
        location: {
            lat: 40.704,
            lng: -74.005
        },
        email: "btorresd@slideshare.net",
        password: "xQrysd"
    }, {
        name: {
            first: "Dennis",
            last: "Holmes"
        },
        phoneNumber: "5-(865)896-6835",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://yale.edu",
        location: {
            lat: 40.703,
            lng: -74.003
        },
        email: "dholmese@senate.gov",
        password: "Do1a1DmzHUXD"
    }, {
        name: {
            first: "Roger",
            last: "Frazier"
        },
        phoneNumber: "8-(592)592-1914",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://ucoz.com",
        location: {
            lat: 40.699,
            lng: -74.01
        },
        email: "rfrazierf@psu.edu",
        password: "JpgHgmf6"
    }, {
        name: {
            first: "Ann",
            last: "Murray"
        },
        phoneNumber: "6-(202)332-3636",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://istockphoto.com",
        location: {
            lat: 40.702,
            lng: -74.01
        },
        email: "amurrayg@imgur.com",
        password: "c79iurHL"
    }, {
        name: {
            first: "Jacqueline",
            last: "Hayes"
        },
        phoneNumber: "7-(661)918-3874",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://spiegel.de",
        location: {
            lat: 40.709,
            lng: -74.006
        },
        email: "jhayesh@nasa.gov",
        password: "VEnHEm"
    }, {
        name: {
            first: "Stephen",
            last: "Webb"
        },
        phoneNumber: "1-(566)126-1253",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://psu.edu",
        location: {
            lat: 40.71,
            lng: -74.003
        },
        email: "swebbi@nasa.gov",
        password: "xpRCcAw06b"
    }, {
        name: {
            first: "Donna",
            last: "Cruz"
        },
        phoneNumber: "1-(265)943-2136",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://ihg.com",
        location: {
            lat: 40.702,
            lng: -74.001
        },
        email: "dcruzj@xrea.com",
        password: "D846IsHbL7X"
    }, {
        name: {
            first: "Jane",
            last: "Crawford"
        },
        phoneNumber: "1-(111)442-4291",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://gizmodo.com",
        location: {
            lat: 40.701,
            lng: -74.008
        },
        email: "jcrawfordk@wordpress.com",
        password: "qEU0sRX4"
    }, {
        name: {
            first: "Anne",
            last: "Graham"
        },
        phoneNumber: "3-(798)124-7385",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://eepurl.com",
        location: {
            lat: 40.706,
            lng: -74.013
        },
        email: "agrahaml@oracle.com",
        password: "KsDAP3ohxK2"
    }, {
        name: {
            first: "Russell",
            last: "Franklin"
        },
        phoneNumber: "4-(875)020-9885",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://pcworld.com",
        location: {
            lat: 40.704,
            lng: -74.011
        },
        email: "rfranklinm@quantcast.com",
        password: "rYPD9wBXhU6l"
    }, {
        name: {
            first: "Phyllis",
            last: "Bradley"
        },
        phoneNumber: "8-(314)443-9371",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://prweb.com",
        location: {
            lat: 40.707,
            lng: -74.01
        },
        email: "pbradleyn@hud.gov",
        password: "DQxw8nnUP"
    }, {
        name: {
            first: "Sara",
            last: "Romero"
        },
        phoneNumber: "1-(324)391-8143",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://yelp.com",
        location: {
            lat: 40.709,
            lng: -74.006
        },
        email: "sromeroo@youku.com",
        password: "dqt83O"
    }, {
        name: {
            first: "Dorothy",
            last: "Sanchez"
        },
        phoneNumber: "5-(165)772-4348",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://vk.com",
        location: {
            lat: 40.706,
            lng: -74.007
        },
        email: "dsanchezp@sbwire.com",
        password: "idaAkg2m5KU"
    }, {
        name: {
            first: "Russell",
            last: "Dean"
        },
        phoneNumber: "7-(234)544-7128",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://webs.com",
        location: {
            lat: 40.708,
            lng: -74.011
        },
        email: "rdeanq@reverbnation.com",
        password: "d4p5LvE"
    }, {
        name: {
            first: "Norma",
            last: "Meyer"
        },
        phoneNumber: "5-(720)822-4387",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://msu.edu",
        location: {
            lat: 40.706,
            lng: -73.999
        },
        email: "nmeyerr@marketwatch.com",
        password: "qQodEChXc"
    }, {
        name: {
            first: "Michael",
            last: "Payne"
        },
        phoneNumber: "7-(845)161-4133",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "http://thetimes.co.uk",
        location: {
            lat: 40.711,
            lng: -74.002
        },
        email: "mpaynes@alexa.com",
        password: "aTK3fXI0d"
    }, {
        name: {
            first: "Joan",
            last: "Jordan"
        },
        phoneNumber: "4-(695)218-5991",
        permissions: "User",
        buyerOf: [{}],
        sellerOf: [{}],
        photo: "https://java.com",
        location: {
            lat: 40.712,
            lng: -74.005
        },
        email: "jjordant@baidu.com",
        password: "NuZlHdyV3"
    }];
    return q.invoke(User, 'create', users);
};
var seedItems = function() {
    var items = [{
        title: "pede justo",
        description: "Donec dapibus. Duis at velit eu est congue elementum.",
        numOfStars: 3,
    }, {
        title: "ac nulla",
        description: "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        numOfStars: 1,
    }, {
        title: "lorem ipsum",
        description: "Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        numOfStars: 1,
    }, {
        title: "mauris",
        description: "Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
        numOfStars: 1,
    }, {
        title: "donec semper",
        description: "Nulla nisl. Nunc nisl.",
        numOfStars: 4,
    }, {
        title: "odio condimentum",
        description: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros.",
        numOfStars: 2,
    }, {
        title: "luctus cum",
        description: "Proin risus. Praesent lectus.",
        numOfStars: 2,
    }, {
        title: "eget elit",
        description: "Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus.",
        numOfStars: 3,
    }, {
        title: "lectus pellentesque",
        description: "Suspendisse ornare consequat lectus.",
        numOfStars: 3,
    }, {
        title: "non sodales",
        description: "Etiam pretium iaculis justo. In hac habitasse platea dictumst.",
        numOfStars: 2,
    }, {
        title: "ligula sit",
        description: "Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        numOfStars: 1,
    }, {
        title: "ipsum praesent",
        description: "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
        numOfStars: 5,
    }, {
        title: "quis turpis",
        description: "Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
        numOfStars: 3,
    }, {
        title: "tortor",
        description: "Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
        numOfStars: 4,
    }, {
        title: "natoque penatibus",
        description: "Quisque ut erat.",
        numOfStars: 2,
    }, {
        title: "interdum",
        description: "Fusce consequat.",
        numOfStars: 2,
    }, {
        title: "interdum",
        description: "Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit.",
        numOfStars: 3,
    }, {
        title: "lorem integer",
        description: "Proin leo odio, porttitor id, consequat in, consequat ut, nulla.",
        numOfStars: 4,
    }, {
        title: "ut rhoncus",
        description: "Curabitur in libero ut massa volutpat convallis.",
        numOfStars: 3,
    }, {
        title: "duis consequat",
        description: "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
        numOfStars: 2,
    }, {
        title: "a",
        description: "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
        numOfStars: 1,
    }, {
        title: "tempus vel",
        description: "Pellentesque at nulla.",
        numOfStars: 2,
    }, {
        title: "nulla",
        description: "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        numOfStars: 1,
    }, {
        title: "amet consectetuer",
        description: "Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        numOfStars: 2,
    }, {
        title: "ipsum",
        description: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus.",
        numOfStars: 2,
    }, {
        title: "sapien",
        description: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis.",
        numOfStars: 3,
    }, {
        title: "ultrices",
        description: "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
        numOfStars: 3,
    }, {
        title: "eros",
        description: "Nunc rhoncus dui vel sem. Sed sagittis.",
        numOfStars: 3,
    }, {
        title: "vel enim",
        description: "Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
        numOfStars: 5,
    }, {
        title: "nec",
        description: "Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque.",
        numOfStars: 3,
    }]
    return q.invoke(Item, 'create', items);
};
var seedCategories = function() {
    var categories = [{
        name: "posuere"
    }, {
        name: "diam id"
    }, {
        name: "neque"
    }, {
        name: "vel"
    }, {
        name: "eu"
    }, {
        name: "in porttitor"
    }, {
        name: "sapien non"
    }, {
        name: "accumsan"
    }, {
        name: "quam"
    }, {
        name: "orci"
    }, {
        name: "nec"
    }, {
        name: "eget"
    }, {
        name: "nulla neque"
    }, {
        name: "duis ac"
    }, {
        name: "velit"
    }, {
        name: "congue vivamus"
    }, {
        name: "magna vulputate"
    }, {
        name: "orci"
    }, {
        name: "et tempus"
    }, {
        name: "turpis adipiscing"
    }, {
        name: "justo eu"
    }, {
        name: "amet"
    }, {
        name: "id ornare"
    }, {
        name: "fusce"
    }, {
        name: "ultrices"
    }, {
        name: "rutrum ac"
    }, {
        name: "magna"
    }, {
        name: "tempus semper"
    }, {
        name: "turpis"
    }, {
        name: "eleifend luctus"
    }];
    return q.invoke(Category, 'create', categories);
};
var seedReviews = function() {
    var reviews = [{
        rating: 3,
        comments: "Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi. Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla.",
    }, {
        rating: 2,
        comments: "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat.",
    }, {
        rating: 4,
        comments: "Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl. Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    }, {
        rating: 5,
        comments: "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
    }, {
        rating: 5,
        comments: "Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    }, {
        rating: 4,
        comments: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    }, {
        rating: 3,
        comments: "Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh. Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue.",
    }, {
        rating: 2,
        comments: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    }, {
        rating: 3,
        comments: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    }, {
        rating: 1,
        comments: "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
    }, {
        rating: 1,
        comments: "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus. Suspendisse potenti.",
    }, {
        rating: 3,
        comments: "Mauris sit amet eros.",
    }, {
        rating: 4,
        comments: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    }, {
        rating: 2,
        comments: "Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit.",
    }, {
        rating: 1,
        comments: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi. Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede.",
    }, {
        rating: 4,
        comments: "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.",
    }, {
        rating: 4,
        comments: "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    }, {
        rating: 2,
        comments: "Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui. Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis.",
    }, {
        rating: 5,
        comments: "Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    }, {
        rating: 4,
        comments: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    }, {
        rating: 5,
        comments: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    }, {
        rating: 5,
        comments: "Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla.",
    }, {
        rating: 4,
        comments: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
    }, {
        rating: 5,
        comments: "Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    }, {
        rating: 2,
        comments: "In congue. Etiam justo. Etiam pretium iaculis justo. In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus. Nulla ut erat id mauris vulputate elementum. Nullam varius.",
    }, {
        rating: 4,
        comments: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    }, {
        rating: 5,
        comments: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum.",
    }, {
        rating: 1,
        comments: "Vivamus vel nulla eget eros elementum pellentesque. Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    }, {
        rating: 1,
        comments: "Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy.",
    }, {
        rating: 1,
        comments: "Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia.",
    }]
    return q.invoke(Review, 'create', reviews);

};
var seedListings = function() {
    var listings = [{
        title: "primis",
        quantity: 49,
        price: "321.05",
       
    }, {
        title: "cubilia",
        quantity: 20,
        price: "264.99",
       
    }, {
        title: "nunc",
        quantity: 47,
        price: "463.47",
       
    }, {
        title: "gravida",
        quantity: 49,
        price: "145.43",
       
    }, {
        title: "in",
        quantity: 23,
        price: "289.43",
       
    }, {
        title: "quam",
        quantity: 9,
        price: "233.61",
       
    }, {
        title: "proin eu",
        quantity: 39,
        price: "240.52",
       
    }, {
        title: "nam nulla",
        quantity: 43,
        price: "107.65",
       
    }, {
        title: "orci",
        quantity: 28,
        price: "246.87",
       
    }, {
        title: "lacinia",
        quantity: 15,
        price: "38.78",
       
    }, {
        title: "quis orci",
        quantity: 8,
        price: "220.09",
       
    }, {
        title: "nibh ligula",
        quantity: 47,
        price: "393.24",
       
    }, {
        title: "non ligula",
        quantity: 37,
        price: "351.75",
       
    }, {
        title: "curae",
        quantity: 36,
        price: "105.58",
       
    }, {
        title: "lectus",
        quantity: 29,
        price: "90.06",
       
    }, {
        title: "porta",
        quantity: 34,
        price: "413.60",
       
    }, {
        title: "nulla",
        quantity: 29,
        price: "262.70",
       
    }, {
        title: "turpis donec",
        quantity: 17,
        price: "211.85",
       
    }, {
        title: "in",
        quantity: 10,
        price: "331.54",
       
    }, {
        title: "hac",
        quantity: 3,
        price: "177.11",
       
    }, {
        title: "odio",
        quantity: 12,
        price: "459.25",
       
    }, {
        title: "condimentum id",
        quantity: 45,
        price: "262.67",
       
    }, {
        title: "dapibus at",
        quantity: 41,
        price: "94.80",
       
    }, {
        title: "interdum",
        quantity: 41,
        price: "468.65",
       
    }, {
        title: "turpis eget",
        quantity: 50,
        price: "213.18",
       
    }, {
        title: "quam sollicitudin",
        quantity: 34,
        price: "400.11",
       
    }, {
        title: "dis",
        quantity: 27,
        price: "389.01",
       
    }, {
        title: "sit amet",
        quantity: 48,
        price: "494.40",
       
    }, {
        title: "habitasse",
        quantity: 11,
        price: "242.26",
       
    }, {
        title: "aenean",
        quantity: 12,
        price: "50.03",
       
    }];
    return q.invoke(Listing, 'create', listings);
};
var relateUserToReviews = function(){
    User.find({}).exec().then(function(users){
        Category.find({}).exec().then(function(categories){
            console.log("categories found"); 
            console.log(users[0]);
            users[0].buyerOf.categories.push(categories[0]._id).save().then(function(){console.log("")}); 
        })
    })
}


var relateListingToItem = function(){
    Listing.find({}).exec().then(function(listings){
        Item.find({}).exec().then(function(items){
            console.log(listings.length + " listings found");
            console.log(items.length + " items found");
            listings[0].item.push(items[0]._id).save().then(function(){console.log('made it')});
        })
    })

}
relateListingToItem(); 
// relateUserToReviews(); 

// connectToDb.then(function() {
//             getCurrentUserData().then(function(users) {
//                 if (users.length === 0) {
//                     return seedUsers();
//                 } else {
//                     console.log(chalk.magenta('Seems to already be user data, exiting!'));
//                     process.kill(0);
//                 }
//             }).then(function() {
//                 console.log(chalk.green("seeding item"));
//                 return seedItems();
//             }).then(function() {
//                 return seedCategories();
//             }).then(function() {
//                 return seedListings();
//             }).then(function() {
//                 return seedReviews();
//             }).then(function() {
//                 console.log(chalk.green('Seed successful!'));
//                 process.kill(0);
//             }).catch(function(err) {
//                 console.error(err);
//                 process.kill(1);
//             });
//         })