import React, { PropsWithChildren } from 'react'
import { useListContext, ListContextProvider } from 'vtex.list-context'
import { BulletsSchema } from './BulletTypes'
import {useDevice} from 'vtex.device-detector'
import { getBulletsAsTSXList } from './modules/bullestAsList'


export interface BulletGroupProps{
   bullets: BulletsSchema
}
const BulletGroup = ({
 bullets,
 children
}:PropsWithChildren<BulletGroupProps>) => {
   const {isMobile} = useDevice();
   const {list} = useListContext() || [] 

   console.log("Bullets", bullets)

   const bulletsGroup = getBulletsAsTSXList(bullets);
   const newListContexValue = list.concat(bulletsGroup)

   if (false) {
      console.log(children, list)
   }
 return (
   <ListContextProvider list={newListContexValue}>
      {
        isMobile   
        ?
         <div>{ bulletsGroup}</div>
        :
         children
      }
   </ListContextProvider>
 )
}

export default BulletGroup;