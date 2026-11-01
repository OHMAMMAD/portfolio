import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github, Send, Copy, Check, AlertCircle, Loader2 } from 'lucide-react'
import SectionBackground from '../components/SectionBackground'
import { siteConfig } from '../data/config'

type FormState = 'idle' | 'sending' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

function CopyEmailButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback for browsers without clipboard API
      const el = document.createElement('textarea')
      el.value = siteConfig.email
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-primary-400 transition-colors duration-200 px-3 py-1.5 rounded-lg hover:bg-primary-500/10"
      aria-label={copied ? 'Email address copied' : 'Copy email address to clipboard'}
    >
      {copied ? (
        <><Check size={14} className="text-emerald-400" aria-hidden="true" /><span className="text-emerald-400">Copied!</span></>
      ) : (
        <><Copy size={14} aria-hidden="true" />Copy email</>
      )}
    </button>
  )
}

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.08 })

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [formState, setFormState] = useState<FormState>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error on change
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  /**
   * The form uses mailto: to open the user's email client pre-filled with the message.
   * To connect to a real email service (e.g. Resend, EmailJS, Formspree):
   *   1. Install the service's SDK or use fetch/axios
   *   2. Replace the handleSubmit body with an API call
   *   3. Store your API key in a .env file as VITE_EMAIL_API_KEY (never commit this file)
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setFormState('sending')

    // Simulate a brief delay then open mailto
    await new Promise((resolve) => setTimeout(resolve, 600))

    const mailtoUrl =
      `mailto:${siteConfig.email}` +
      `?subject=${encodeURIComponent(formData.subject)}` +
      `&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`

    try {
      window.location.href = mailtoUrl
      setFormState('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setFormState('error')
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-white/5 border rounded-xl px-4 py-3 text-white placeholder-slate-500 text-sm
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
    transition-colors duration-200
    ${errors[field] ? 'border-red-500/60 focus:ring-red-500' : 'border-white/10 hover:border-white/20'}`

  return (
    <SectionBackground
      /* Contact section background placeholder — configure in src/data/config.ts */
      src={siteConfig.backgrounds.contact}
      alt="Contact section background"
      overlay="bg-dark-900/85"
      id="contact"
    >
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-primary-600/5 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <section
        className="section-container section-padding"
        aria-labelledby="contact-heading"
      >
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <p className="section-label">Let's connect</p>
            <h2 id="contact-heading" className="section-title">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="section-subtitle mx-auto text-center">
              Whether you have a project in mind, a question, or just want to connect — I'm happy to hear from you.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            {/* Left — contact info */}
            <motion.div variants={itemVariants} className="lg:col-span-2 flex flex-col gap-6">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>

              {/* Email */}
              <div className="glass-card p-5 flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary-500/20 flex items-center justify-center">
                    <Mail size={18} className="text-primary-400" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-white font-medium text-sm hover:text-primary-400 transition-colors duration-200"
                      aria-label={`Send email to ${siteConfig.email}`}
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>
                <CopyEmailButton />
              </div>

              {/* GitHub */}
              <div className="glass-card p-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-slate-700/50 flex items-center justify-center">
                    <Github size={18} className="text-slate-300" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">GitHub</p>
                    <a
                      href={siteConfig.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium text-sm hover:text-primary-400 transition-colors duration-200"
                      aria-label="View GitHub profile (opens in new tab)"
                    >
                      github.com/OHMAMMAD
                    </a>
                  </div>
                </div>
              </div>

              {/* Note */}
              <p className="text-sm text-slate-500 leading-relaxed">
                I typically respond within a few days. Feel free to reach out for collaboration, opportunities, or
                just to say hi.
              </p>
            </motion.div>

            {/* Right — form */}
            <motion.div variants={itemVariants} className="lg:col-span-3">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass-card p-6 sm:p-8 flex flex-col gap-5"
                noValidate
                aria-label="Contact form"
              >
                {/* Name + Email row */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Name <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className={inputClass('name')}
                      aria-required="true"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      autoComplete="name"
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-slate-400 mb-1.5">
                      Email <span aria-hidden="true" className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className={inputClass('email')}
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      autoComplete="email"
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Subject <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    className={inputClass('subject')}
                    aria-required="true"
                    aria-invalid={!!errors.subject}
                    aria-describedby={errors.subject ? 'subject-error' : undefined}
                  />
                  {errors.subject && (
                    <p id="subject-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-slate-400 mb-1.5">
                    Message <span aria-hidden="true" className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me what's on your mind..."
                    className={`${inputClass('message')} resize-none`}
                    aria-required="true"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1.5 text-xs text-red-400" role="alert">{errors.message}</p>
                  )}
                </div>

                {/* Status messages */}
                {formState === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/25 text-emerald-300 text-sm"
                    role="status"
                  >
                    <Check size={16} aria-hidden="true" />
                    Your email client should have opened. Thanks for reaching out!
                  </motion.div>
                )}
                {formState === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-red-500/15 border border-red-500/25 text-red-300 text-sm"
                    role="alert"
                  >
                    <AlertCircle size={16} aria-hidden="true" />
                    Something went wrong. Please email me directly at{' '}
                    <a href={`mailto:${siteConfig.email}`} className="underline hover:text-red-200">
                      {siteConfig.email}
                    </a>
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={formState === 'sending'}
                  className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  aria-label="Send message"
                >
                  {formState === 'sending' ? (
                    <><Loader2 size={16} className="animate-spin" aria-hidden="true" />Sending…</>
                  ) : (
                    <><Send size={16} aria-hidden="true" />Send Message</>
                  )}
                </button>

                <p className="text-xs text-slate-600 text-center">
                  Submitting opens your email client. No data is stored on any server.
                </p>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </SectionBackground>
  )
}
