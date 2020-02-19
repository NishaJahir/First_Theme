<?php
 
namespace BrandcrockSampleTheme\Providers;
 
use Plenty\Plugin\ServiceProvider;
use IO\Extensions\Functions\Partial;
use Plenty\Plugin\Events\Dispatcher;
use Plenty\Plugin\Templates\Twig;
use Plenty\Plugin\Log\Loggable;
use Plenty\Plugin\ConfigRepository;
use IO\Helper\TemplateContainer;
use Plenty\Modules\Webshop\Template\Providers\TemplateServiceProvider;
 
class BrandcrockSampleThemeServiceProvider extends ServiceProvider
{
 use Loggable;
	
	/**
	 * Register the service provider.
	 */
	public function register()
	{
         
	}
	public function boot(Twig $twig, Dispatcher $eventDispatcher)
    	{
		
        $eventDispatcher->listen('IO.init.templates', function(Partial $partial)
        {
           $partial->set('footer', 'BrandcrockSampleTheme::content.BrandcrockSampleThemeFooter');
        }, 0);
        return false;
        }
	
	
}
