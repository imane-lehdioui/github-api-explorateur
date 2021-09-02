        btn.onclick = () => {
            fetch("https://api.github.com/users/" + champ.value)
            .then(reponse => reponse.json() )
            .then(data => {
                output.innerHTML = " ";
                output.innerHTML = `compte de ${data.name}`;
                const img = document.createElement("img");
                img.src = data.avatar_url;
                img.width = "300";
                output.appendChild(img);

            }
            )
        }
