
onPageLoad();
window.addEventListener('hashchange', function () {
    loading();
    if (!location.hash || location.hash == "#" || location.hash == "") {
        window.location = "#home";
    }
    load();
}, false);

function onPageLoad() {
    loading();
    if (!location.hash || location.hash == "#" || location.hash == "") {
        window.location = "#home";
    }
    load();
}

function load() {
    loading();
    if (location.hash == "#home") {
        getData().then(data => { populate(data); })

    }
    else if (location.hash == "#tech") {
        getTechData().then(data => { populate(data); })
    }
    else if (location.hash == "#india") {
        getIndiaData().then((data => { populate(data); }));
    }
    else if (location.hash == "#business") {
        getBusinessData().then((data => { populate(data); }));
    }
    else if (location.hash == "#bollywood") {
        getBollywoodData().then((data => { populate(data); }));
    }
    else if (location.hash == "#cricket") {
        //getCricketData().then((data => { populate(data); }));
    }
    else if (location.hash == "#other") {
        getOtherData().then((data => { populate(data); }));
    }
    else {
        //getHomeData().then(data => { populate(data); })
    }

}

function loading() {
    $(".content").html("");
    $(".content").html(`
        <div class="d-flex align-items-center">
            <strong>Loading...</strong>
            <div class="spinner-border ms-auto" role="status" aria-hidden="true"></div>
        </div>
    `);
}
async function fetchURL(url) {
    const response = await fetch(`https://sbcors.herokuapp.com/${url}`);
    const text = await response.text();
    try {
        const data = JSON.parse(text);
        return { success: 1, urlfetched: url, data: data }
    } catch (err) {
        return { success: 0, urlfetched: url, error: err, response: text }
    }
}
function imgError(image) {
    //  $(image).hide();    
    $(image).attr("src", `placeholder.jpg`);
    // $(image).unwrap();
    //$(image).parent().remove();
}

function getData() {
    return new Promise((resolve, reject) => {
        try {
            var urls = [
                `https://feeds.npr.org/1001/rss.xml`,
                `http://feeds.bbci.co.uk/news/world/rss.xml`,
                `http://rss.cnn.com/rss/edition_world.rss`,
                `https://rss.nytimes.com/services/xml/rss/nyt/World.xml`,
                `http://www.aljazeera.com/xml/rss/all.xml`,
                `https://timesofindia.indiatimes.com/rssfeeds/296589292.cms`,
                `https://www.cnbc.com/id/100727362/device/rss/rss.html`,

            ]
            async.map(urls, async function (url) {
                try {
                    const response = await rss(`https://sbcors.herokuapp.com/${url}`)
                    //const response = await rss(`${url}`)
                    return response
                } catch (err) {
                    console.log(err);
                    return {}
                }
            }, (err, results) => {
                if (err) { console.log(err); } else {
                    resolve(results);
                }
            })

        } catch (err) { reject(err) }
    })
}
function getTechData() {
    return new Promise((resolve, reject) => {
        try {
            var urls = [
                `https://www.techmeme.com/feed.xml?x=1`,
                `https://www.wired.com/feed/rss`,
                `https://techcrunch.com/feed/`,
                `https://www.technologyreview.com/topnews.rss`,
                `http://www.theverge.com/rss/frontpage`,
                `http://feeds.feedburner.com/venturebeat/SZYF`,
                `http://feeds.arstechnica.com/arstechnica/technology-lab`,

            ]
            async.map(urls, async function (url) {
                try {
                    const response = await rss(`https://sbcors.herokuapp.com/${url}`)
                    //const response = await rss(`${url}`)
                    return response
                } catch (err) {
                    console.log(err);
                    return {}
                }
            }, (err, results) => {
                if (err) { console.log(err); } else {
                    resolve(results);
                }
            })

        } catch (err) { reject(err) }
    })
}
function getIndiaData() {
    return new Promise((resolve, reject) => {
        try {
            var urls = [
                `http://feeds.feedburner.com/NDTV-LatestNews`,
                `https://www.indiatoday.in/rss/1206578`,
                `https://indianexpress.com/feed/`,
                `https://www.thehindu.com/news/national/?service=rss`,
                `http://www.news18.com/rss/india.xml`,
                `https://www.dnaindia.com/feeds/india.xml`,
                `https://www.deccanchronicle.com/rss_feed/`,
                `http://feeds.feedburner.com/ScrollinArticles.rss`,
                `https://prod-qt-images.s3.amazonaws.com/production/thequint/feed.xml`,
                `https://telanganatoday.com/feed`,

            ]
            async.map(urls, async function (url) {
                try {
                    const response = await rss(`https://sbcors.herokuapp.com/${url}`)
                    //const response = await rss(`${url}`)
                    return response
                } catch (err) {
                    console.log(err);
                    return {}
                }
            }, (err, results) => {
                if (err) { console.log(err); } else {
                    resolve(results);
                }
            })

        } catch (err) { reject(err) }
    })
}
function getBusinessData() {
    return new Promise((resolve, reject) => {
        try {
            var urls = [
                `https://economictimes.indiatimes.com/rssfeedsdefault.cms`,
                `http://www.financialexpress.com/feed`,
                `https://prod-qt-images.s3.amazonaws.com/production/bloombergquint/feed.xml`,
                `https://in.mashable.com/business-1.xml`,
                `https://www.ft.com/?format=rss`,

            ]
            async.map(urls, async function (url) {
                try {
                    const response = await rss(`https://sbcors.herokuapp.com/${url}`)
                    //const response = await rss(`${url}`)
                    return response
                } catch (err) {
                    console.log(err);
                    return {}
                }
            }, (err, results) => {
                if (err) { console.log(err); } else {
                    resolve(results);
                }
            })

        } catch (err) { reject(err) }
    })
}
function getBollywoodData() {
    return new Promise((resolve, reject) => {
        try {
            var urls = [
                `https://www.bollywoodhungama.com/rss/news.xml`,                
                `http://feeds.feedburner.com/missmalini`,
                `http://www.pinkvilla.com/rss.xml`,
                `http://www.rediff.com/rss/moviesrss.xml`,
                `http://www.koimoi.com/feed/`,

            ]
            async.map(urls, async function (url) {
                try {
                    const response = await rss(`https://sbcors.herokuapp.com/${url}`)
                    //const response = await rss(`${url}`)
                    return response
                } catch (err) {
                    console.log(err);
                    return {}
                }
            }, (err, results) => {
                if (err) { console.log(err); } else {
                    resolve(results);
                }
            })

        } catch (err) { reject(err) }
    })
}
function getOtherData() {
    return new Promise((resolve, reject) => {
        try {
            var urls = [
                `https://www.rt.com/rss/news/`,
                `https://www.reddit.com/r/worldnews+technology+business+finance+technews+economy/.rss?geo_filter=IN`,               

            ]
            async.map(urls, async function (url) {
                try {
                    const response = await rss(`https://sbcors.herokuapp.com/${url}`)
                    //const response = await rss(`${url}`)
                    return response
                } catch (err) {
                    console.log(err);
                    return {}
                }
            }, (err, results) => {
                if (err) { console.log(err); } else {
                    resolve(results);
                }
            })

        } catch (err) { reject(err) }
    })
}
function populateSingle(data) {
    console.log(data);
    if (data.length > 0) {
        $(".content").html("");
        $(".content").append(`
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex gap-2 w-100 justify-content-start">
                    <img src="${data.image.url}" alt="" width="56" height="56" class="flex-shrink-0 rounded" />
                    <div class="border-bottom">                               
                        <h6 class="mb-0 mt-0 fw-bold">${data.title}</h6> 
                        <p class="mt-0 smaller">${data.description}</p> 
                    </div>                
                </div>
                <div><ul class="newsItems mt-2"></ul></div>
            </div>
        </div>
        `);
        $.each(data.items.slice(0, 5), function (k, v) {
            try {
                //var { hostname } = new URL(v.link);
                // let imgsrc = v.media ? v.media : `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fpieceartura.pl%2Fwp-content%2Fuploads%2Fwoocommerce-placeholder.png%3Ffit%3D960%252C960%26ssl%3D1&f=1&nofb=1`
                var $listItem = $(`<li class="py-1 small newslink" style="cursor:pointer">
                    ${v.title}                   
                </li>`);
                $listItem.on("click", function (e) {
                    console.log(v.link);
                    //window.open(v.canonicalUrl);
                });
                $(`.newsItems`).append($listItem);
            } catch (err) {
                //$(".content").html("<strong class='text-danger'>Sorry! This RSS did not return a valid response</strong>");
                console.clear();
            }
        });
    }


}
function populate(data) {
    console.log(data);
    $(".content").html("");
    $.each(data, function (i, j) {
        var { hostname } = new URL(data[i].items[0].link);
        let description = data[i].description ? data[i].description : ``
        $(".content").append(`
        <div class="card mb-3">
            <div class="card-body">
                <div class="d-flex gap-2 w-100 justify-content-start">               
                    <img src="https://icon.horse/icon/${hostname.replace("www.", "")}" alt="${hostname}" width="56" height="56" class="flex-shrink-0 rounded" />
                    <div class="border-bottom">                               
                        <h6 class="mb-0 mt-0 fw-bold">${data[i].title}</h6> 
                        <p class="mt-0 smaller">${description}</p> 
                    </div>                
                </div>
                <div><ul class="newsItems${i} mt-2 scroll"></ul></div>
            </div>
        </div>
        `);
        $.each(data[i].items, function (k, v) {
            try {
                //var { hostname } = new URL(v.link);
                // let imgsrc = v.media ? v.media : `https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fpieceartura.pl%2Fwp-content%2Fuploads%2Fwoocommerce-placeholder.png%3Ffit%3D960%252C960%26ssl%3D1&f=1&nofb=1`
                var $listItem = $(`<li class="py-1 small newslink" style="cursor:pointer">
                    ${v.title}                   
                </li>`);
                $listItem.on("click", function (e) {
                    console.log(v.link);
                    getArticleExtract(v.link);
                });
                $(`.newsItems${i}`).append($listItem);
            } catch (err) {
                //$(".content").html("<strong class='text-danger'>Sorry! This RSS did not return a valid response</strong>");
                console.clear();
            }
        });
    });

}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}

function getArticleExtract(url) {
    $("#wpContent").html(``);
    async.tryEach([
        (next) => {
            Parse(`${url}`).then(data => {
                if (data.title) {
                    console.log(data);
                    source_url = new URL(url);
                    update_HTML(data, source_url);
                } else {
                    console.log(`Simple parsing did not work`);
                    document.getElementById("overlay").style.display = "none";
                    return next(new Error('Cannot get Data'))
                }
            }).catch(err => {
                console.log(err);
                document.getElementById("overlay").style.display = "none";
                return next(new Error('Cannot get Data'))
            })
        },

        (next) => {
            Parse(`https://sbcors.herokuapp.com/${url}`).then(data => {
                if (data.title) {
                    console.log(data);
                    source_url = new URL(url);
                    update_HTML(data, source_url);

                } else {
                    console.log(`CORS did not work`);
                    document.getElementById("overlay").style.display = "none";
                    return next(new Error('Cannot get Data'))
                }
            }).catch(err => {
                console.log(err);
                document.getElementById("overlay").style.display = "none";
                return next(new Error('Cannot get Data'))
            })
        },
    ])
}

function update_HTML(data, source_url) {
    document.getElementById("overlay").style.display = "block";
    $("#wpContent").append(`<div class="row"><div class="mb-2 ms-0 col-4"><button type="button" class="btn btn-small" onclick="off()"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg text-dark fw-bold" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></button></div></div>`);
    $("#wpContent").append(`<img alt="${source_url.hostname}" class="mt-1 mb-3" src="https://www.google.com/s2/favicons?domain=${source_url.hostname}" /><span> ${source_url.hostname.replace("http://", "").replace("https://", "").replace("www.", "")}</span>`);
    $("#wpContent").append(`<h1>${data.title}</h1>`);
    if (data.date_published) {
        $("#wpContent").append(`<p class="small m-2">${data.date_published.split('T')[0]}</p>`);
    }
    $("#wpContent").append(`<hr class="my-3"></hr>`);
    $("#wpContent").append(`<img src ="${data.lead_image_url}" alt="" width='80%' height="auto" style="object-fit:cover; margin:auto" onerror='imgError(this)'/>`);
    $("#wpContent").append(`<div class="small mt-2">${data.content}</div>`);
    $("#wpContent").append(`<div class="small"><button type="button" class="btn btn-small" onclick="off()"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-x-lg text-dark fw-bold" viewBox="0 0 16 16">
    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
  </svg></button>
    </div>`);
    $("#loader").attr("style", "display:none");
    $("#wpContent").show();
}




