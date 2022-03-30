import { useState, useMemo, createContext, useContext } from "react";
import transformDriver from '../utils/transform/driver';

export async function getServerSideProps(context) {
	const { query: { page } } = context;
  const res = await fetch(`https://randomuser.me/api/?page=${page}&results=5&seed=abc`)
  const resJson = await res.json()
  const drivers = transformDriver(resJson.results);

  return {
      props: { drivers }
  }
}

const useDriversController = ( drivers ) => {
	const [ filter, setFilter ] = useState('');

	const filteredDrivers = useMemo(
		() => {
			return filterDrivers(drivers, filter)
		}, [filter, drivers]
	)

	return {
		filter,
		setFilter,
		drivers: filteredDrivers
	}
}

function filterDrivers(drivers, filter) {
	if (drivers) return drivers.filter((driver) => driver.firstName.toLowerCase().includes(filter.toLowerCase()))
	return [];
}

const DriverContext = createContext({
	filter: '',
	setFilter: () => {},
	drivers: [],
})

export const DriverProvider = ({ drivers, children }) => (
	<DriverContext.Provider value={useDriversController(drivers)}>
		{children}
	</DriverContext.Provider>
)

export const useDrivers = () => useContext(DriverContext);