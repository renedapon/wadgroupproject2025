window.onload = function() {
    //fetch(' https://api.npoint.io/43f70deed440bc5a18a6')
    fetch('res/json/posts.json')
        .then((response) => response.json())
        .then(json => {
            console.log(json);

        
            let postsContainer = document.createElement("div");
            postsContainer.className = "posts";
            document.body.appendChild(postsContainer);

            for (let i = 0; i < json.length; i++) {

                let div = document.createElement("div");
                div.className = 'post';

                let postHeader = document.createElement("div");
                postHeader.className = 'post-header';

                let profileImg = document.createElement("img");
                profileImg.className = "profile-picture";
                profileImg.src = json[i]["profile-image"];
                profileImg.alt = "Profile";


                let authorName = document.createElement("p");
                authorName.className = "author-name";
                authorName.innerText = json[i].author;

                let dateSpan = document.createElement("p");
                dateSpan.className = "date";
                dateSpan.innerText = json[i].date;

                let authorInfo = document.createElement("div");
                authorInfo.className = "author-info";
                authorInfo.appendChild(profileImg);
                authorInfo.appendChild(authorName);

                postHeader.appendChild(authorInfo);
                postHeader.appendChild(dateSpan);



                let postContent = document.createElement("div");
                postContent.className = 'post-content';

                if (json[i].image) {
                    let img = document.createElement("img");
                    img.src = json[i].image;
                    img.alt = json[i].title;
                    postContent.appendChild(img);
                }

                let title = document.createElement("h3");
                title.innerText = json[i].title;
                postContent.appendChild(title);

                let text = document.createElement("p");
                text.innerText = json[i].text;
                postContent.appendChild(text);


                let location = document.createElement("p");
                location.className = "info";
                location.innerText = `📍 ${json[i].location}`;
                postContent.appendChild(location);

                let likes = document.createElement("p");
                likes.className = "info";
                likes.innerText = `👍 ${json[i].likes} likes`;
                postContent.appendChild(likes);


                if (json[i].tags && json[i].tags.length > 0) {
                    let tags = document.createElement("strong");
                    tags.className = "tags";
                    for (let j = 0; j < json[i].tags.length; j++) {
                        json[i].tags[j] = "#" + json[i].tags[j]
                    }
                    tags.innerText = json[i].tags.join(" ");
                    postContent.appendChild(tags);
                }

                div.appendChild(postHeader);
                div.appendChild(postContent);
                postsContainer.appendChild(div);
            }
        })
        .catch(err => {
            let errDiv = document.createElement("div");
            errDiv.className = 'post';
            errDiv.innerText = err;
            document.body.appendChild(errDiv);
            })
        .finally(() => {
            let footer = document.createElement("footer");
            footer.className = "footer";
            footer.innerText = "Web Application Development, Group N"
            document.body.appendChild(footer);
        });
};
