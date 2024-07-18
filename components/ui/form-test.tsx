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
  { label: "Registered 501(c)(3)", value: "501c3" },
  { label: "Registered Small Business", value: "regis" },
  { label: "State Registered Non-Profit", value: "state" },
  { label: "Unregistered Orginization", value: "unr" },
  { label: "Educational Institution", value: "educa" },
  { label: "Community Service Organization", value: "commu" },
  { label: "Environmental Conservation Group", value: "envi" },
  { label: "Other", value: "other" },

] as const

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  orgType: z.string({
    required_error: "Please select a Organization Type.",
  }).min(1, {
    message: "Please select a Organization Type.",
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
          email: "",
          name: "",
          orgType: "",
          bio: "",
        },
      })



  
      async function onSubmit(data: z.infer<typeof formSchema>) {

        try {
          const res = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSeBGRdaqHlmAMF5-3VUC7q5Dm0-zJ5Qk59nVMYhRy9TSwBzTw/formResponse', {
            method: 'POST',

            // use the google form entires: entry.1423296062 = name, entry.1225451973 = email, entry.900125753 = orgType, entry.264286563 = bio
            body: new URLSearchParams({
              'entry.1423296062': data.name,
              'entry.1225451973': data.email,
              'entry.900125753': data.orgType,
              'entry.264286563': data.bio,
            }),
            mode: 'no-cors',
          })

          form.reset()
          toast({
            title: "Thanks for submitting!",
            description: "We'll get back to you as soon as possible.",
          })
          
        } catch (err: any) {
          console.error('Err', err)
          toast({
            title: "Uh oh! Something went wrong.",
            description: "There was a problem sending your message. Please try again later.",
          })
        }
  
        
       }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 sm:space-y-7">
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
              Please select the organization type that you believe is the most accurate.
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
              What do you do? What are you interested in for a website? etc.
              </FormDescription>
              <FormMessage />
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
