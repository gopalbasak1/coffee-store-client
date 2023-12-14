import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffee = () => {

    const coffee = useLoaderData();
    const {_id,name,quantity,supplier,taste,details,category,photo} = coffee;

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = {name,quantity,supplier,taste,details,category,photo};

        console.log(updatedCoffee);

        //send data to the server
        fetch(`https://coffee-store-server-cyh05720d-gopalbasak1.vercel.app/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Coffee Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'Done'
                  })
            }
        })
    }

    return (
        <div className="bg-[#f4f3f0] p-24">
            <h2 className="text-3xl font-extrabold">Update Coffee</h2>

           <form onSubmit={handleUpdateCoffee}>

            {/*form name and quantity row*/}
           <div className="flex mb-8">
<div className="form-control md:w-1/2">
    <label className="label">
       <span className="label-text">Coffee Name</span>
    </label>
    <label className="input-group">
            <input type="text" name="name" defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full"/>
            </label>
</div>

<div className="form-control md:w-1/2 ml-4">
    <label className="label">
       <span className="label-text">Available Quantity</span>
    </label>
    <label className="input-group">
            <input type="number" name="quantity" defaultValue={quantity}  placeholder="Available Quantity" className="input input-bordered w-full"/>
            </label>
</div>

    </div>
            {/*form supplier & taste row*/}
           <div className="flex mb-8">
<div className="form-control md:w-1/2">
    <label className="label">
       <span className="label-text">Supplier Name</span>
    </label>
    <label className="input-group">
            <input type="text" defaultValue={supplier} name="supplier" placeholder="Supplier Name" className="input input-bordered w-full"/>
            </label>
</div>

<div className="form-control md:w-1/2 ml-4">
    <label className="label">
       <span className="label-text">Taste</span>
    </label>
    <label className="input-group">
            <input type="text" defaultValue={taste} name="taste" placeholder="Taste" className="input input-bordered w-full"/>
            </label>
</div>

    </div>

            {/*form category & details row*/}
           <div className="flex mb-8">
<div className="form-control md:w-1/2">
    <label className="label">
       <span className="label-text">Category</span>
    </label>
    <label className="input-group">
            <input type="text" defaultValue={category} name="category" placeholder="Category" className="input input-bordered w-full"/>
            </label>
</div>

<div className="form-control md:w-1/2 ml-4">
    <label className="label">
       <span className="label-text">Details</span>
    </label>
    <label className="input-group">
            <input type="text" defaultValue={details} name="details" placeholder="Details" className="input input-bordered w-full"/>
            </label>
</div>

    </div>
            {/*form photo url row*/}
           <div className="flex mb-8">
<div className="form-control w-full">
    <label className="label">
       <span className="label-text">Photo URL</span>
    </label>
    <label className="input-group">
            <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="input input-bordered w-full"/>
            </label>
</div>

    </div>
            <input className="btn btn-block" type="submit" value="Update Coffee" />
           </form>

        </div>
    );
};

export default UpdateCoffee;