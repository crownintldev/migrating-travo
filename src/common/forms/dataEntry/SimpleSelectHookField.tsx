// @ts-nocheck
// import React, { useState } from 'react'
// import { Controller } from 'react-hook-form'
// import CustomAutocomplete from 'src/@core/components/mui/autocomplete'
// import CustomTextField from 'src/@core/components/mui/text-field'

// const SimpleSelectHookField = ({
//   control,
//   errors,
//   name,
//   options,
//   label,
//   placeholder,
//   disableClearable
// }) => {

//   return (
//     <Controller
//       name={name}
//       control={control}
//       render={({ field: { onChange, value, ...field }, fieldState: { error } }) => (
//         <CustomAutocomplete
//           {...field}
//           sx={{ mb: 4 }}
//           options={options ? options : ['confirmed', 'processing']}
//           id='autocomplete-size-medium'
//           value={value || null}
//           getOptionLabel={(option) => option || ''}
//           isOptionEqualToValue={(option, value) => option === value}
//           onChange={(event, newValue) => {
//             onChange(newValue)
//           }}
//           disableClearable={disableClearable || false}
//           renderInput={(params) => (
//             <CustomTextField
//               {...params}
//               size='small'
//               label={label}
//               placeholder={placeholder}
//               error={Boolean(errors && errors[name])}
//               helperText={errors ? errors[name]?.message : null}
//             />
//           )}
//         />
//       )}
//     />
//   )
// }

// export default SimpleSelectHookField

import React from 'react'
import { Controller } from 'react-hook-form'
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Command, CommandItem, CommandInput, CommandGroup } from '@/components/ui/command'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const SimpleSelectHookField = ({
  control,
  errors,
  name,
  options,
  label,
  placeholder,
  disableClearable
}) => {
  console.log('options value', options)
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Popover>
          <PopoverTrigger asChild>
            <Button variant='outline' className='w-[200px] justify-between'>
              {value
                ? options.find((option) => option.value === value)?.label
                : placeholder}
              <CaretSortIcon className='ml-2 h-4 w-4 shrink-0 opacity-50' />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[200px] p-0'>
            <Command>
              <CommandInput placeholder={`Search ${label}...`} className='h-9' />
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => {
                      onChange(option.value)
                    }}
                  >
                    {option.label}
                    <CheckIcon
                      className={cn(
                        'ml-auto h-4 w-4',
                        value === option.value ? 'opacity-100' : 'opacity-0'
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      )}
    />
  )
}

export default SimpleSelectHookField
