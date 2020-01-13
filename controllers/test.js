module.exports = {

	index (req, res, next) {
		try {
			res.send('test');
		} catch (error) {
			next(error);
		}
	}

}