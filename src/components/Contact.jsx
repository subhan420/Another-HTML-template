import {Btn,Wrap} from './ui'
const INFO=[['☎','Phone Number','+1-234-567-8901'],['✉','Email','contact@william.design'],['S','Skype','WilliamDesignUX'],['⌖','Address','0811 Erdman Prairie, Joaville CA']]
const F=({l,ph,type='text'})=><label className="block text-xs">{l} <span className="text-accent">*</span><input type={type} placeholder={ph} className="mt-2 w-full rounded-lg border border-line bg-bg p-3 text-sm outline-none focus:border-accent"/></label>
export default function Contact(){
  return <section id="contact" className="py-24"><Wrap className="grid gap-12 lg:grid-cols-[1fr_2fr]">
    <div data-reveal><h2 className="text-5xl text-accent">Get in touch</h2>
      <p className="mt-4 max-w-md text-sm">I'm always excited to take on new projects and collaborate with innovative minds. If you have a project in mind or just want to chat about design, feel free to reach out!</p>
      <ul className="mt-10 space-y-5">{INFO.map(([i,l,v])=><li key={l} className="flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-xl border border-line bg-surface text-accent">{i}</span><span className="text-xs text-muted">{l}<b className="block text-sm font-semibold text-fg">{v}</b></span></li>)}</ul></div>
    <form data-reveal onSubmit={e=>e.preventDefault()} className="grid gap-4 sm:grid-cols-2"><h3 className="text-2xl font-medium sm:col-span-2">Leave a messge</h3>
      <F l="Your name" ph="John Doe"/><F l="Email address" ph="contact.john@gmail.com" type="email"/><F l="Your phone" ph="+01 234 567 89"/><F l="Subject" ph="I want to contact for..."/>
      <label className="block text-xs sm:col-span-2">Message <span className="text-accent">*</span><textarea placeholder="Your message here..." className="mt-2 h-40 w-full rounded-lg border border-line bg-bg p-3 text-sm outline-none focus:border-accent"/></label>
      <div><Btn type="submit">Send Message</Btn></div></form>
  </Wrap></section>
}
