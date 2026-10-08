# ShowCase - MERN Product Gallery

A product gallery website with image upload. Product data and images are stored in MongoDB Atlas through an Express API.

**Student:** John Matthew Olano - INF233

## Local setup

1. Copy `server/.env.example` to `server/.env` and set `MONGO_URI` to your MongoDB Atlas connection string.
2. Copy `client/.env.example` to `client/.env` and set `VITE_API_URL` to your API URL (for local work, `http://localhost:5000`).
3. Run `npm install` in both `server` and `client`.
4. Start the API with `npm start` inside `server`, then start the website with `npm run dev` inside `client`.

## API endpoints

- `GET /api/products`
- `GET /api/products/:id`
- `POST /api/products`
- `PUT /api/products/:id`
- `DELETE /api/products/:id`
