import { Control } from "react-hook-form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "./ui/input";
import { useState } from "react";
import { capitalize } from "lodash";

type CustomFormFieldProps = {
  name: string;
  control: Control<any>;
};

export function CustomFormField({ name, control }: CustomFormFieldProps) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel className="capitalize">{name}</FormLabel>
          <FormControl>
            <Input {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

type CustomFormSelectProps = {
  name: string;
  control: Control<any>;
  items: string[];
  labelText?: string;
};

export function CustomFormSelect({
  name,
  control,
  items,
  labelText
}: CustomFormSelectProps) {
  const [isEmpty, setIsEmpty] = useState(false);

  if (items.length === 0) {
    setIsEmpty(true);
    items.push(`No ${capitalize(labelText)} found`);
  }

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel className='capitalize'>{labelText || name}</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {items.map((item, index) => {
                  return (
                    <SelectItem disabled={isEmpty} key={index} value={item} className="cursor-pointer">
                      {capitalize(item)}
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
            <FormMessage />
          </FormItem>
        );
      }}
    >

    </FormField>
  );
}