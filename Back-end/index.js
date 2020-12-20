const db = require('./models');
const express = require('express');
const app = express();
const cors = require ('cors');
const accountRoutes = require('./routes/Account');
const addressRoutes = require('./routes/Address');
const cartRoutes = require('./routes/Cart');
const categoryRoutes = require('./routes/Category');
const productRoutes = require('./routes/Product');

require('./config/passport/passport');

app.use (cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/accounts', accountRoutes);
app.use('/address', addressRoutes);
app.use('/carts', cartRoutes);
app.use('/categories', categoryRoutes);
app.use('/products', productRoutes);

db.sequelize.sync().then(() => {
    app.listen(8000, () => {
        console.log('sever i s running at port 8000');
    });
});
