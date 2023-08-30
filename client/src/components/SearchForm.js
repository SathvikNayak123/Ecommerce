import React, { useEffect } from 'react';
import {FiSearch} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SearchForm = () => {
  const navigate=useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [isAnimating, setIsAnimating]=useState(false);

  useEffect(() => {
    const timeout=setTimeout(()=>{
      setIsAnimating(false);
    },1000);
    return ()=>clearTimeout(timeout);
  })

  const handleSearchInput=(e)=>{
    setSearchTerm(e.target.value);
  };

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(searchTerm.length>0) {
      navigate(`/search?query=${searchTerm}`);
      document.querySelector('input').value='';
      setSearchTerm('');
    }else{
      setIsAnimating(true);
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${isAnimating ? 'animate-shake' : 'animate-none'} w-full relative`}>
      <input onChange={handleSearchInput} className='input' type='text' placeholder='Search for a product..'/>
      <button className='btn btn-accent absolute top-0 right-0 rounded-tl-none rounded-bl-none'>
        <FiSearch className='text-2xl'/>
      </button>
    </form>
  );
};

export default SearchForm;
