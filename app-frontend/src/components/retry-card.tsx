import {
  AlertTriangle,
  CheckCircle,
  Database,
  Globe,
  HelpCircle,
  Mail,
  RefreshCw,
  Server,
  WifiOff,
  XCircle,
} from "lucide-react";
import React from "react";

interface RetryCardProps {
  isRetrying: boolean;
  handleRetry: () => void;
}

const RetryCard = ({ isRetrying, handleRetry }: RetryCardProps) => {
  const [retryCount, setRetryCount] = React.useState(0);
  return (
    <div className="col-span-4 w-full flex items-center justify-center min-h-96 p-4">
      <div className="w-full ">
        {/* Main Card */}
        <div className="bg-card text-card-foreground shadow-lg border rounded-xl overflow-hidden">
          {/* Two Column Layout - Desktop/Tablet */}
          <div className="grid lg:grid-cols-2 min-h-[400px]">
            {/* Left Column - Error Message & Actions */}
            <div className="flex flex-col justify-center p-8 lg:p-12 space-y-6">
              {/* Error Icon & Message */}
              <div className="space-y-4">
                <div className="flex justify-center lg:justify-start">
                  <div className="relative">
                    <div className="absolute inset-0 bg-destructive/20 rounded-full animate-ping"></div>
                    <div className="relative bg-destructive/10 p-4 rounded-full">
                      <AlertTriangle
                        className="w-8 h-8 text-destructive"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>

                <div className="text-center lg:text-left space-y-2">
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
                    Something went wrong
                  </h2>
                  <p className="text-lg text-muted-foreground max-w-md">
                    We couldn't fetch the popular items right now. This might be
                    due to a temporary connection issue.
                  </p>

                  {/* Connection Status */}
                  <div className="flex items-center justify-center lg:justify-start gap-2 pt-2">
                    <WifiOff className="w-4 h-4 text-destructive" />
                    <span className="text-sm text-muted-foreground">
                      Connection interrupted
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      handleRetry();
                      setRetryCount((prev) => prev + 1);
                    }}
                    disabled={isRetrying}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-6 py-2 transform hover:scale-105 active:scale-95"
                  >
                    <RefreshCw
                      className={`w-4 h-4 mr-2 ${isRetrying ? "animate-spin" : ""}`}
                    />
                    {isRetrying ? "Retrying..." : "Try Again"}
                  </button>

                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2 transform hover:scale-105">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Get Help
                  </button>
                </div>

                {/* Retry Counter */}
                {retryCount > 0 && (
                  <div className="animate-in fade-in-0 slide-in-from-bottom-2 duration-300">
                    <p className="text-xs text-muted-foreground text-center lg:text-left">
                      Attempt {retryCount} • Last tried at{" "}
                      {new Date().toLocaleTimeString()}
                    </p>
                  </div>
                )}
              </div>

              {/* Quick Contact */}
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground mb-3 text-center lg:text-left">
                  Still having trouble?
                </p>
                <div className="flex flex-col sm:flex-row gap-2">
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-3 py-1">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Support
                  </button>
                  <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-9 px-3 py-1">
                    <HelpCircle className="w-4 h-4 mr-2" />
                    Help Center
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Recovery Steps & Status (Hidden on mobile) */}
            <div className="bg-muted/30 border-l hidden md:flex flex-col">
              {/* Recovery Steps */}
              <div className="flex-1 p-8 space-y-6">
                <div>
                  <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    Try these steps:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Check your internet connection",
                      "Refresh the page or restart the app",
                      "Clear browser cache and cookies",
                      "Try again in a few moments",
                    ].map((step, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 cursor-default group"
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-xs font-medium text-primary mt-0.5 group-hover:bg-primary/20 transition-colors">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* System Status - Hidden on tablets */}
                <div className="hidden lg:block space-y-4 pt-4 border-t">
                  <h3 className="font-semibold text-foreground flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    System Status:
                  </h3>
                  <div className="space-y-3">
                    {[
                      { name: "API Server", status: "checking", icon: Server },
                      { name: "Database", status: "online", icon: Database },
                      { name: "CDN", status: "online", icon: Globe },
                    ].map(({ name, status, icon: Icon }) => (
                      <div
                        key={name}
                        className="flex items-center justify-between group hover:bg-background/50 -mx-2 px-2 py-1 rounded transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-foreground">
                            {name}
                          </span>
                        </div>
                        <div className="flex items-center gap-1">
                          {status === "online" ? (
                            <>
                              <CheckCircle className="w-4 h-4 text-green-500" />
                              <span className="text-xs font-medium text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                                Online
                              </span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-4 h-4 text-amber-500 animate-pulse" />
                              <span className="text-xs font-medium text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
                                Checking
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t bg-muted/20 px-6 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="font-mono">
                  Error ID: ERR-{Date.now().toString().slice(-6)}
                </span>
                <div className="w-1 h-1 bg-muted-foreground/50 rounded-full hidden sm:block"></div>
                <span className="hidden sm:inline">
                  Occurred at {new Date().toLocaleString()}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <button className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors">
                  Report Issue
                </button>
                <button className="text-sm font-medium text-primary hover:underline underline-offset-4 transition-colors">
                  System Status
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetryCard;
