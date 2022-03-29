import { useState, useMemo, createContext, useContext } from "react";
import transformDriver from '../utils/transform/driver';

export async function getStaticProps() {
  const page = 1;
  const res = await fetch(`https://randomuser.me/api/?page=${page}&results=5&seed=abc`)
  const resJson = await res.json()
  const { results } = resJson;
  const drivers = transformDriver(results);

  return {
      props: { drivers }
  }
}

const useDriversController = (drivers) => {
	const [ filter, setFilter ] = useState('');

	const filteredDrivers = useMemo(
		() => 
			drivers.filter((driver) => 
				driver.firstName.toLowerCase().includes(filter.toLowerCase())
			), [filter, drivers]
	)

	return {
		filter,
		setFilter,
		drivers: filteredDrivers
	}
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