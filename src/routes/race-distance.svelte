<fieldset>
	<legend>Race Distance</legend>

	<div class="custom-input">
		<input type="number" />
		<div>kilometers</div>
	</div>

	<div class="button-group">
		<button>3 km</button>
		<button>5 km</button>
		<button>10 km</button>
		<button>21.1 km</button>
		<button>42.2 km</button>
	</div>
</fieldset>

<style>
	fieldset {
		border: 0;
		padding: 0;
		margin-bottom: 3rem;

		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	legend {
		color: #242428;
		font-size: 12px;
		margin-top: 0;
		margin-bottom: 5px;
		padding: 0;
	}

	.custom-input {
		display: flex;
	}

	input {
		width: 12rem;
		padding: 0 1rem;
		text-align: center;
		border: 1px solid #dfdfe8;
	}

	input:focus {
		border-color: #007fb6;
		outline: 0;
		appearance: none;
	}

	.custom-input > div {
		display: flex;
		align-items: center;
		background-color: #fff;
		color: #242428;
		border: 1px solid #dfdfe8;
		border-left: 0;
		border-radius: 0 4px 4px 0;
		padding: 6px 10px;
	}

	.button-group {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	button {
		background-color: #fff;
		color: #242428;
		align-items: center;
		border: 1px solid #dfdfe8;
		border-radius: 4px;
		cursor: pointer;
		padding: 6px 10px;
	}

	button:hover {
		background-color: #e6e6e6;
		border-color: #bbbbce;
	}

	button:active {
		background-color: #e6e6e6;
		border-color: #bbbbce;
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
		outline: 0;
	}
</style>
