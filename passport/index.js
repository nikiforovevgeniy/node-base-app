const passport = require('passport');

const strategies = {
	'local': '@/passport/local',
}

Object.keys(strategies).forEach(strategy => {
	passport.use(
		strategy,
		require(strategies[strategy])
	);
});