CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    userName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    photo_Url VARCHAR(255)
);

CREATE TABLE questions (
    question_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    question_text TEXT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);

CREATE TABLE queries (
    query_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    query_text TEXT NOT NULL,
    db VARCHAR(50) NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (user_id)
);
