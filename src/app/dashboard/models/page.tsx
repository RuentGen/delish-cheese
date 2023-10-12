import React from 'react'
import { TextButton, TextIconButton, SearchBox, DropdownList, Icon, LinkButtonIcon } from '@/app/components'
import modelColNames from '../../../data/modelsColNames.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

interface Model {
  name: string
  sku: string
  modelID: string
  category: string
  color: string
  size: string
  rprice: number
  showcase: string
  hdrSrc: string
  thumbnail: string
  createdAt: string
  updatedAt: string
  deletedAt: string
}

const products = async () => {

  const { data } = await fetch(
    "http://localhost:4000/graphql",
    {
      method: "POST",
      body: JSON.stringify({
        query: `{
          getModels {
            sku
            modelID
            name
            path
            showcase
            category
            color
            rprice
            sprice
            size
            createdBy
            createdAt
            updatedAt
            deletedAt
            hdrSrc
            thumbnail
          }
        }`,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 1 }
    }
  ).then( async (res) => {
    return await res.json()
  })

  const models: Model[] = await data?.getModels

  console.log(models)

  return (
    <div className='h-auto w-full'>
      <div className='top-button-outer-container h-auto w-full md:items-center md:justify-between flex flex-col-reverse md:flex-row'>
        
        <div className="top-buttons-container my-1 flex flex-col items-center md:flex-row">
          <LinkButtonIcon href='/models/editor' label='Add new product' iconName='circle-plus' color='colorPrimary' textColor='white' hoverColor='green-600 ease-in-out duration-300'/>
          <TextIconButton   text='Export' icon="file-export" size={20} />
        </div>

        <div className="search-box-container">
          <SearchBox placeholder='Search Product'/>
        </div>

      </div>
      <div className="span-buttons-container flex items-center gap-1">
        <span className='font-bold text-sm'>Models:</span>
        <div className="span-button-inner-container">
          <TextButton color='colorSecondary' weight='semibold' text='All' size='sm' data={[]}/> | 
          <TextButton color='colorSecondary' weight='semibold' text='Publish' size='sm' data={[]}/> | 
          <TextButton color='colorSecondary' weight='semibold' text='Drafts' size='sm' data={[]}/> | 
          <TextButton color='colorSecondary' weight='semibold' text='Trash' size='sm' data={[]}/>
        </div>
      </div>
      <div className="dropdown-list-list flex flex-col md:flex-row justify-between gap-2">
        <DropdownList text="Model Status"/>
        <DropdownList text="Category"/>
        <DropdownList text="Date Added"/>
        <DropdownList text="Added By"/>
      </div> 

      <div className="product-list h-full w-full">
        <div className='my-5'>
          <span>View Products</span> <span className='font-semibold'>0/0</span>
        </div>
        <div className="product-table h-full w-full shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-5">
          <div className="table-column-name h-20 w-full border-b grid grid-cols-12 grid-rows-1 items-center mb-5">
            {/* Map column name */}
            {modelColNames.map((col: any, indx: number) => {
              if(col.label === "checkbox"){
                return <span className='h-full w-full flex'><input key={`model-${indx}`} type='checkbox' className='m-auto' /></span>
              }else if(col.label === "image"){
                return (
                  <span key={`model-${indx}`} className='h-full w-full flex items-center justify-center'>
                     <Icon iconName='image' size={25}/>
                  </span>
                )
              }else{
                return(
                  <span 
                    key={`model-${indx}`}
                    className='text-sm font-semibold p-3 text-colorSecondary'
                  >
                    {col.label.toUpperCase()}
                  </span>
                )
              }
            })}
          </div>
          <div className="product-table-list h-full w-full">
            {/* Map product here */}
            { models && models.length > 0 ? 
              models.map((item, index) => {
                const date = new Date(parseInt(item.createdAt)).toLocaleDateString()
                const time = new Date(parseInt(item.createdAt)).toLocaleTimeString()
                return (
                  <div 
                    key={`model-${index}`}
                    className='w-full h-20 grid grid-cols-12 grid-rows-1 items-center justify-center'
                  >
                    <input type='checkbox' />
                    <span className='h-20 w-20 bg-slate-50 rounded flex'>
                      <Icon iconName='image' size={25}/>
                    </span>
                    <span className='p-3 flex flex-wrap items-center text-sm'>{item.name}</span>
                    <span className='p-3 flex flex-wrap items-center text-sm'>{item.sku}</span>
                    <span className='p-3 flex flex-wrap items-center text-sm'>{item.modelID}</span>
                    <span className='p-3 flex flex-wrap items-center text-sm'>{item.category}</span>
                    <span className='p-3 flex flex-wrap items-center text-sm'>{item.color}</span>
                    <span className='p-3 flex flex-wrap items-center text-sm'>{item.size}</span>
                    <span className='p-3 flex flex-wrap items-center text-sm'>${item.rprice}</span>
                    <span className='p-3 flex flex-wrap items-center text-sm'>{item.showcase}</span>
                    <span className='p-3 flex flex-wrap items-center text-xs'>Last modified: {date},{time}</span>
                    <div className='h-full w-full p-3 flex items-center gap-5'>
                      <Link href={`models/editor/${item.modelID}`}><FontAwesomeIcon title='Edit' icon="pen" width={20} height={20} className='text-colorSecondary'/></Link>
                      {/* <Link href={``}><FontAwesomeIcon title='Delete' icon="trash" width={20} height={20} className='text-red-500'/></Link> */}
                    </div>
                  </div>
                )
              })
              :
              "No models yet"
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default products
