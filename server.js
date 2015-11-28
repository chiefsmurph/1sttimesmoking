var app = express();
app.use('/', express.static(path.join(__dirname, 'dist')));

var server = app.listen(process.env.PORT || 8001);
console.log('Server listening on port ' + (process.env.PORT || 8001));
