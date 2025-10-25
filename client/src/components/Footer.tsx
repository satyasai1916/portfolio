export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/20">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-8 md:py-12">
        <div className="text-center">
          <p className="text-sm md:text-base text-muted-foreground" data-testid="text-copyright">
            © {currentYear} Developer Portfolio. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
