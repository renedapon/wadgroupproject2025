window.onload = function() {
    fetch('https://api.npoint.io/f0b88caab6339858bbb6')
    //fetch('res/json/posts.json')
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
                profileImg.className = "profile-pic";
                profileImg.src = json[i]["profile-image"];
                profileImg.width = 50;
                profileImg.height = 50;
                profileImg.alt = "Profile";


                let authorName = document.createElement("strong");
                authorName.className = "author-name";
                authorName.innerText = json[i].author;

                let dateSpan = document.createElement("time");
                dateSpan.className = "date";
                dateSpan.innerText = json[i].date;

                postHeader.appendChild(profileImg);
                postHeader.appendChild(authorName);
                postHeader.appendChild(dateSpan);


                let postContent = document.createElement("div");
                postContent.className = 'post-content';

                if (json[i].image) {
                    let img = document.createElement("img");
                    img.src = json[i].image;
                    img.width = 300;
                    img.height = 200;
                    img.alt = json[i].title;
                    postContent.appendChild(img);
                }

                let title = document.createElement("h3");
                title.innerText = json[i].title;
                postContent.appendChild(title);

                let text = document.createElement("p");
                text.innerText = json[i].text;
                postContent.appendChild(text);


                let info = document.createElement("p");
                info.className = "info";
                info.innerText = `📍 ${json[i].location} | 👍 ${json[i].likes} likes`;
                postContent.appendChild(info);


                if (json[i].tags && json[i].tags.length > 0) {
                    let tags = document.createElement("p");
                    tags.className = "tags";
                    tags.innerText = "Tags: " + json[i].tags.join(", ");
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