module.exports = {
	resolve: {
	  extensions: ['.js', '.jsx', '.ts', '.tsx']
	},
	module: {
	  rules: [
		{
		  test: /\.(j|t)sx$/,
		  exclude: /node_modules/,
		  use: {
			loader: 'babel-loader',
			options: {
			  plugins: [
				isDevelopment && require.resolve('react-refresh/babel')
			  ].filter(Boolean)
			}
		  }
		},
		{
		  test: /\.scss$/,
		  exclude: /node_modules/,
		  use: ['style-loader', 'css-loader', 'sass-loader']
		},
		{
		  test: /\.(png|jpe?g|gif|svg)$/i,
		  use: [
			{
			  loader: 'file-loader',
			},
		  ],
		},
	  ]
	}
  }