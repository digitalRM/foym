"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import { useForm } from "react-hook-form"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"

const orgTypes = [
  { label: "English", value: "en" },
  { label: "French", value: "fr" },
  { label: "German", value: "de" },
  { label: "Spanish", value: "es" },
  { label: "Portuguese", value: "pt" },
  { label: "Russian", value: "ru" },
  { label: "Japanese", value: "ja" },
  { label: "Korean", value: "ko" },
  { label: "Chinese", value: "zh" },
] as const

const formSchema = z.object({
  name: z.string().regex(/^[a-zA-Z]+$/, {
    message: "Your name must only contain letters.",
  }).min(2, {
    message: "Username must be at least 2 characters.",
  }),
  orgType: z.string({
    required_error: "Please select a orgType.",
  }),
  mobile: z.boolean().default(false).optional(),
  bio: z
  .string()
  .min(90, {
    message: "Organization Information must be at least 90 characters.",
  })
  .max(500, {
    message: "Organization Information must not be longer than 500 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email.",
  }),
})


export function ProfileForm() {
    
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          name: "",
          orgType: "",
          mobile: false,
        },
      })
    
      // 2. Define a submit handler.
      function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
          title: "You submitted the following values:",
          description: (
            <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
              <code className="text-white">{JSON.stringify(data, null, 2)}</code>
            </pre>
          ),
        })
      }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name</FormLabel>
              <FormControl>
                <Input placeholder="Jane Smith" type="name" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your full name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jane@domain.com" type="name" {...field} />
              </FormControl>
              <FormDescription>
                Please enter your preferred email.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="orgType"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Organization Type</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        " justify-between",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value
                        ? orgTypes.find(
                            (orgType) => orgType.value === field.value
                          )?.label
                        : "Select Organization Type"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="p-0 w-full">
                  <Command className=" w-full">
                    <CommandInput placeholder="Search Organization Type..." />
                    <CommandEmpty>No Organization Type found.</CommandEmpty>
                    <CommandGroup>
                      {orgTypes.map((orgType) => (
                        <CommandItem
                          value={orgType.value}
                          key={orgType.value}
                          onSelect={(value) => {
                            form.setValue("orgType", value)
                          }}
                        >
                          <Check
                            className={cn(
                              "mr-2 h-4 w-4",
                              orgType.value === field.value
                                ? "opacity-100"
                                : "opacity-0"
                            )}
                          />
                          {orgType.label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </Command>
                </PopoverContent>
              </Popover>
              <FormDescription>
                This is the Organization Type that will be used in the dashboard.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="bio"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization Information</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about your organization. "
                  {...field}
                />
              </FormControl>
              <FormDescription>
              What do you do? What are you intrested for in a website? etc.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="mobile"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Is the information that you have provided is correct?
                </FormLabel>
                <FormDescription>
                  Please double check your information before submitting!
                </FormDescription>
              </div>
            </FormItem>
          )}
        />

        
          
        
        <DialogFooter>
          <Button type="submit" className="w-full">Submit</Button>
        </DialogFooter>
      </form>
    </Form>
  )
}
