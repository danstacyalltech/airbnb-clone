"use client";

// this interface will be used to define the props of the component
// an interface is a type that is used to define the shape of an object
// The shape of an object is the properties that the object has and the types of those properties
interface ContainerProps {
	// the children prop is a special prop that is used to render the children of the component, and we give it a type of React.ReactNode
	children: React.ReactNode;
}

// now we assign the Props to the element and then extract the children prop from the props object
const Container = ({ children }: ContainerProps) => {
	return (
		<div className="max-w-[2520px] mx-auto xl:px-20 md:px-20 sm:px-2 px-4">
			{children}
		</div>
	);
};

export default Container;
