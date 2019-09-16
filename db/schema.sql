### Schema

CREATE DATABASE krusty;
USE krusty;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(300) NOT NULL,
    img     VARCHAR(600) DEFAULT "https://vignette.wikia.nocookie.net/spongebob/images/d/d4/Krabby_Patty_transparentpng.png/revision/latest/scale-to-width-down/350?cb=20170310181007",
    eaten BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
)